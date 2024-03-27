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
      v-for="subCategoryID in filteredSubCategoryIDs"
      :key="subCategoryID"
      class="sub-category p-2 rounded-2xl"
      :class="{
        selected: isSelected(subCategoryID),
      }"
      @click="selectSubCategory(subCategoryID)"
    >
      <!-- Отображаем изображение, если svgPath не пустой -->
      <img
        v-if="currentCategory.subCategories[subCategoryID].svgPath"
        :src="currentCategory.subCategories[subCategoryID].svgPath"
        class="sub-category-svg"
        alt="Subcategory image"
      />
      <!-- Отображаем CupIcon, если svgPath пустой -->
      <CupIcon v-else class="sub-category-svg" />
      <div class="item-name text-[0.8rem] font-medium">
        {{ currentCategory.subCategories[subCategoryID].name }}
      </div>
      <div
        class="price text-xs font-semibold"
        :class="{
          'price-selected': isSelected(subCategoryID),
        }"
      >
        $ {{ currentCategory.subCategories[subCategoryID].price }}
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
const route = useRoute();

// Получаем текущую категорию из стора
const currentCategory = computed(() => orderStore.currentCategory.category);
const currentCategoryID = computed(() => orderStore.currentCategory.categoryID);
const addons = useAddOnsStore();
// Измените вычисление columnsCount, чтобы учитывать новую логику отображения
const columnsCount = computed(() => {
  const subCategoriesCount = currentCategory.value?.subCategoryIDs.length || 0;
  if (subCategoriesCount <= 3) {
    return subCategoriesCount; // 1-3 элемента: кол-во столбцов равно кол-ву элементов
  } else {
    return Math.ceil(subCategoriesCount / 2); // Больше 3 элементов: 2 строки
  }
});

// Новое вычисляемое свойство для определения количества строк
const gridTemplateRows = computed(() => {
  const subCategoriesCount = currentCategory.value?.subCategoryIDs.length || 0;
  return subCategoriesCount <= 3 ? "1fr" : "repeat(2, 1fr)";
});

// Определяем, выбрана ли подкатегория
function isSelected(subCategoryID) {
  return !!orderStore.subCategoriesSelections[currentCategory.value.name]?.[
    currentCategory.value.subCategories[subCategoryID].name
  ];
}

// Вычисляемый список ID подкатегорий, исключая те, которые не доступны
const filteredSubCategoryIDs = computed(() => {
  // Сначала получаем объект недоступных подкатегорий для текущего ID продукта
  const productUnavailableExtras = addons.anAvailableExtras[route.params.id];

  // Если для текущего продукта есть данные о недоступных подкатегориях,
  // то берем их по ID текущей категории, иначе пустой массив
  const unavailableSubCategoryIDs = productUnavailableExtras
    ? productUnavailableExtras[currentCategoryID.value] || []
    : [];

  // Фильтруем ID подкатегорий, исключая недоступные
  return currentCategory.value.subCategoryIDs.filter(
    (subCategoryID) => !unavailableSubCategoryIDs.includes(subCategoryID)
  );
});

function selectSubCategory(subCategoryID) {
  // Определяем, была ли подкатегория выбрана до этого
  const currentlySelected = isSelected(subCategoryID);
  if (currentCategory.value.multipleSelectionAllowed) {
    // Множественный выбор: переключаем состояние выбранного
    orderStore.selectSubCategory(
      currentCategory.value.name,
      currentCategory.value.subCategories[subCategoryID].name,
      !currentlySelected,
      currentCategory.value.subCategories[subCategoryID].svgPath
    );
  } else {
    // Одиночный выбор: сбрасываем выбор для всех подкатегорий, затем выбираем текущую
    currentCategory.value.subCategoryIDs.forEach((subCategoryId) => {
      orderStore.selectSubCategory(
        currentCategory.value.name,
        currentCategory.value.subCategories[subCategoryId].name,
        false
      );
    });
    orderStore.selectSubCategory(
      currentCategory.value.name,
      currentCategory.value.subCategories[subCategoryID].name,
      !currentlySelected,
      currentCategory.value.subCategories[subCategoryID].svgPath
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
  //нужно будет добавить логику что если возвращается из корзины
  //то уберать дефолт чтобы он не перевыбирал
  // Проверяем, существуют ли данные по умолчанию для текущего ID продукта
  const productDefaultExtras = addons.defaultExtras[route.params.id];

  if (productDefaultExtras && productDefaultExtras[currentCategoryID.value]) {
    const defaultExtras = productDefaultExtras[currentCategoryID.value];

    defaultExtras.forEach((subCategoryID) => {
      const subCategory = currentCategory.value.subCategories[subCategoryID];
      if (subCategory) {
        orderStore.selectSubCategory(
          currentCategory.value.name,
          subCategory.name,
          true, // isSelected
          subCategory.svgPath
        );
      }
    });
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
