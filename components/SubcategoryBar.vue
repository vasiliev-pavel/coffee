<template>
  <div
    class="grid-container"
    :style="{ 'grid-template-columns': `repeat(${columnsCount}, 1fr)` }"
  >
    <div
      v-for="subCategory in currentCategory.subCategories"
      :key="subCategory.name"
      class="sub-category p-5 rounded-2xl"
      :class="{ selected: isSelected(subCategory) }"
      @click="selectSubCategory(subCategory)"
    >
      <CupIcon class="sub-category-svg" />
      <div class="item-name text-sm font-semibold">
        {{ subCategory.name }}
      </div>
      <div
        class="price text-xs font-semibold"
        :class="{ 'price-selected': isSelected(subCategory) }"
      >
        $ {{ subCategory.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CupIcon from "~/components/icons/CupIcon.vue";

const orderStore = useOrderStore();

// Получаем текущую категорию из стора
const currentCategory = computed(() => orderStore.currentCategory);

// Вычисляем количество столбцов на основе количества подкатегорий в текущей категории
const columnsCount = computed(() => {
  const subCategories = currentCategory.value?.subCategories || [];
  return subCategories.length < 3 ? 2 : 3;
});

// Определяем, выбрана ли подкатегория
function isSelected(subCategory) {
  return !!orderStore.subCategoriesSelections[currentCategory.value.name]?.[
    subCategory.name
  ];
}

function selectSubCategory(subCategory) {
  // Определяем, была ли подкатегория выбрана до этого
  const currentlySelected = isSelected(subCategory);
  if (currentCategory.value.multipleSelectionAllowed) {
    // Множественный выбор: переключаем состояние выбранного
    orderStore.selectSubCategory(
      currentCategory.value.name,
      subCategory.name,
      !currentlySelected
    );
  } else {
    // Одиночный выбор: сбрасываем выбор для всех подкатегорий, затем выбираем текущую
    currentCategory.value.subCategories.forEach((category) => {
      orderStore.selectSubCategory(
        currentCategory.value.name,
        category.name,
        false
      );
    });
    orderStore.selectSubCategory(
      currentCategory.value.name,
      subCategory.name,
      !currentlySelected
    );
  }
}
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
