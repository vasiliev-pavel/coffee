<template>
  <div
    class="grid-container"
    :style="{
      'grid-auto-columns': `repeat(${columnsCount}, minmax(0, 1fr))`,
      'grid-template-rows': gridTemplateRows,
    }"
    ref="gridContainer"
  >
    <div
      v-for="subCategory in currentCategory.subCategories"
      :key="subCategory.name"
      class="sub-category p-5 rounded-2xl"
      :class="{ selected: isSelected(subCategory) }"
      @click="selectSubCategory(subCategory)"
    >
      <!-- Отображаем изображение, если svgPath не пустой -->
      <img
        v-if="subCategory.svgPath"
        :src="subCategory.svgPath"
        class="sub-category-svg"
        alt="Subcategory image"
      />
      <!-- Отображаем CupIcon, если svgPath пустой -->
      <CupIcon v-else class="sub-category-svg" />
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
import {
  startDragging,
  stopDragging,
  handleDragging,
} from "~/utils/dragToScroll";
const gridContainer = ref(null);

const orderStore = useOrderStore();

// Получаем текущую категорию из стора
const currentCategory = computed(() => orderStore.currentCategory);

// Измените вычисление columnsCount, чтобы учитывать новую логику отображения
const columnsCount = computed(() => {
  const subCategoriesCount = currentCategory.value?.subCategories.length || 0;
  if (subCategoriesCount <= 3) {
    return subCategoriesCount; // 1-3 элемента: кол-во столбцов равно кол-ву элементов
  } else {
    return Math.ceil(subCategoriesCount / 2); // Больше 3 элементов: 2 строки
  }
});

// Новое вычисляемое свойство для определения количества строк
const gridTemplateRows = computed(() => {
  const subCategoriesCount = currentCategory.value?.subCategories.length || 0;
  return subCategoriesCount <= 3 ? "1fr" : "repeat(2, 1fr)";
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
      !currentlySelected,
      subCategory.svgPath
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
      !currentlySelected,
      subCategory.svgPath
    );
  }
}
onMounted(() => {
  const element = gridContainer.value;
  if (element) {
    element.addEventListener("mousedown", (e) => startDragging(e, element));
    element.addEventListener("mouseleave", () => stopDragging(element));
    element.addEventListener("mouseup", () => stopDragging(element));
    element.addEventListener("mousemove", (e) => handleDragging(e, element));
  }
});
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
  grid-template-rows: repeat(2, 1fr); /* Two rows */
  grid-auto-flow: column; /* Automatically place items in columns */
  /* Adjust the minimum and maximum width as needed */
  gap: 0.5rem;
  overflow-x: auto; /* Allows horizontal scrolling */
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
  padding-left: 2rem;
  padding-right: 2rem;
  padding-bottom: 1rem;
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

.grid-container::-webkit-scrollbar {
  display: none;
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
