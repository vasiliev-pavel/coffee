<template>
  <div
    class="grid-container"
    :style="{ 'grid-template-columns': `repeat(${columnsCount}, 1fr)` }"
  >
    <div
      v-for="subCategory in currentCategory.subCategories"
      :key="subCategory.name"
      class="sub-category p-5 rounded-2xl"
      :class="{ selected: subCategory.selected }"
      @click="selectSubCategory(subCategory)"
    >
      <CupIcon class="sub-category-svg" />
      <div class="item-name text-sm font-semibold">
        {{ subCategory.name }}
      </div>
      <div
        class="price text-xs font-semibold"
        :class="{ 'price-selected': subCategory.selected }"
      >
        $ {{ subCategory.price }}
      </div>
    </div>
  </div>
</template>

<script>
import CupIcon from "~/components/icons/CupIcon.vue";

export default {
  props: {
    currentCategory: Object,
  },
  components: {
    CupIcon,
  },
  computed: {
    columnsCount() {
      return this.currentCategory.subCategories.length < 3 ? 2 : 3;
    },
  },
  methods: {
    selectSubCategory(selectedSubCategory) {
      if (this.currentCategory.multipleSelectionAllowed) {
        // Множественный выбор: просто переключаем статус выбранного
        selectedSubCategory.selected = !selectedSubCategory.selected;
      } else {
        // Одиночный выбор: проверяем, выбран ли уже этот элемент
        if (selectedSubCategory.selected) {
          // Если элемент уже выбран, снимаем выбор
          selectedSubCategory.selected = false;
        } else {
          // Если элемент не был выбран, сначала сбрасываем выбор всех элементов...
          this.currentCategory.subCategories.forEach((subCategory) => {
            subCategory.selected = false;
          });
          // ...затем выбираем текущий элемент
          selectedSubCategory.selected = true;
        }
      }

      // После выбора подкатегории, отправляем обновленный список в родительский компонент
      // Собираем выбранные подкатегории
      const selectedSubCategories = this.currentCategory.subCategories.filter(
        (subCategory) => subCategory.selected
      );
      let categoryName = this.currentCategory.name;
      let additionalCount = 0; // Сбрасываем счетчик дополнительных выборов

      // Условие обновляется для обработки как ситуации с одной, так и с несколькими подкатегориями
      if (selectedSubCategories.length >= 1) {
        categoryName = selectedSubCategories[0].name;
        additionalCount = selectedSubCategories.length - 1;
      }

      // Передача обновленной информации о категории
      this.$emit("update:categoryState", {
        categoryName, // Передается имя первой выбранной подкатегории
        selectedSubCategories, // Передается массив выбранных подкатегорий
        additionalCount, // Передается количество дополнительно выбранных подкатегорий
      });
    },
  },
};
</script>

<style>
.price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #818181;
}

.price-selected {
  color: #4a4949; /* Зелёный цвет */
}

.grid-container {
  display: grid;
  /* grid-template-columns: repeat(3, 1fr); */
  gap: 0.5rem;
}

.sub-category {
  width: 6.5rem;
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.1s all;
}

/* .sub-category:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
} */

.sub-category-svg {
  height: 5rem;
}

.item-name {
  min-height: 3.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #4a4949;
}

.selected {
  border: 2px solid #007bff; /* Синий цвет */
}

@media (max-width: 320px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
