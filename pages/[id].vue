<template>
  <section class="item-bar">
    <section class="grid grid-cols-1">
      <!-- Левая часть -->
      <div class="col-span-1 h-[64vh] relative">
        <Transition name="fade">
          <CloseIcon
            v-show="!isExtraContainerVisible"
            @click="goBack"
            class="absolute top-0 right-0 m-5 z-10 hover:scale-110 active:scale-95 transition duration-150 ease-in-out"
          />
        </Transition>
        <section>
          <video
            v-if="item.videoSrc"
            autoplay
            muted
            loop
            playsinline
            class="absolute top-0 h-full w-full object-cover z-0"
            :src="item.videoSrc"
            :alt="item.name"
          ></video>

          <img
            v-else
            :src="item.photo"
            :alt="item.name"
            class="absolute top-0 h-full w-full object-cover z-0"
          />
          <div
            class="z-0 absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#e8e8e8] via-[#e8e8e8b4] to-transparent"
          >
            <h3 class="font-medium text-3xl mb-5 text-[#4A4949]">
              {{ item.name }}
            </h3>
            <div class="flex flex-row items-center justify-between">
              <div class="flex items-center">
                <button
                  @click="increment"
                  class="button_plus bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full"
                >
                  <PlusIcon
                    v-if="!cartStore.isUpdate"
                    class="h-[2rem] w-[2rem]"
                  />
                  <UpdateIcon v-else class="h-[2rem] w-[2rem]" />
                </button>

                <h3 class="flex text-[#4A4949] font-medium text-3xl ml-2">
                  ${{ totalItemPrice.toFixed(2) }}
                </h3>
              </div>

              <SizeSelector />
            </div>
          </div>
        </section>
      </div>

      <!-- Правая часть -->
      <div class="px-5 font-medium text-xl text-[#4A4949]">
        customize as you like it
      </div>

      <!-- Выбор категории дополнений-->
      <div class="extra-bar" ref="extraBar">
        <div class="scroll-container">
          <div class="extra-bar-inner" ref="extraBarInner">
            <div
              v-for="categoryInfo in categoriesDisplayInfo"
              :key="categoryInfo.name"
              @click="selectCategory(categoryInfo.name)"
              :class="{
                'is-active': categoryInfo.isActive,
                'is-inactive': !categoryInfo.isActive,
              }"
              class="category-item"
            >
              <div class="relative">
                <div
                  v-if="categoryInfo.displayIcons.some((iconPath) => iconPath)"
                  class="flex flex-col items-center justify-center"
                >
                  <div
                    v-show="categoryInfo.additionalCount > 0"
                    class="additional-count"
                  >
                    +{{ categoryInfo.additionalCount }}
                  </div>
                  <div class="flex flex-row items-center justify-center">
                    <img
                      v-for="(iconPath, index) in categoryInfo.displayIcons"
                      v-if="iconPath !== ''"
                      :key="index"
                      :src="iconPath"
                      class="category-icon"
                    />
                  </div>
                </div>
                <CupIcon v-else class="category-icon" />
              </div>

              <div class="category-name">{{ categoryInfo.displayText }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Контейнер с выбором -->
      <div
        class=".extra-container-product"
        :class="{ 'is-visible': isExtraContainerVisible }"
      >
        <div class="absolute top-0 left-0 right-0 mt-5 px-5">
          <div class="flex flex-row items-center justify-between">
            <div class="flex items-center">
              <button
                @click="increment"
                class="button_plus bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full"
              >
                <PlusIcon
                  v-if="!cartStore.isUpdate"
                  class="h-[2rem] w-[2rem]"
                />
                <UpdateIcon v-else class="h-[2rem] w-[2rem]" />
              </button>

              <h3 class="flex text-[#4A4949] font-medium text-3xl ml-2">
                ${{ totalItemPrice.toFixed(2) }}
              </h3>
            </div>

            <SizeSelector />
          </div>
        </div>
        <SubcategoryBar
          v-if="
            currentCategory &&
            currentCategory.subCategories &&
            currentCategory.subCategories.length > 0
          "
          class="mt-16"
        />
      </div>

      <!-- хорошо сочетается-->
      <div class="combination"></div>
    </section>
  </section>
</template>

<script setup>
import { extras as mockCategories } from "~/mock.ts";
import SubcategoryBar from "~/components/SubcategoryBar.vue";
import CupIcon from "~/components/icons/CupIcon.vue";
import PlusIcon from "~/components/icons/PlusIcon.vue";
import CloseIcon from "~/components/icons/CloseIcon.vue";
import UpdateIcon from "~/components/icons/UpdateIcon.vue";

import {
  startDragging,
  stopDragging,
  handleDragging,
} from "~/utils/dragToScroll";
import { data } from "~/mock.ts";
definePageMeta({
  layout: "product",
});

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const cartStore = useCart2Store();
const orderDetails = useOrderStore();

const categories = ref(
  mockCategories.map((category) => ({
    ...category,
    additionalCount: 0, // Инициализируем счётчик дополнительных выборов
  }))
);

const extraBar = ref(null);
const extraBarInner = ref(null);
const currentCategory = computed(() => orderDetails.currentCategory);
const isExtraContainerVisible = ref(false); // по умолчанию скрыт

onMounted(() => {
  if (extraBarInner.value) {
    extraBarInner.value.addEventListener("mousedown", (e) =>
      startDragging(e, extraBarInner.value)
    );
    extraBarInner.value.addEventListener("mouseleave", () =>
      stopDragging(extraBarInner.value)
    );
    extraBarInner.value.addEventListener("mouseup", () =>
      stopDragging(extraBarInner.value)
    );
    extraBarInner.value.addEventListener("mousemove", (e) =>
      handleDragging(e, extraBarInner.value)
    );
    extraBarInner.value.addEventListener("wheel", handleWheelEvent);
  }
});

const categoriesDisplayInfo = computed(() => {
  return categories.value.map((category) => {
    const selections = orderDetails.subCategoriesSelections[category.name];
    const selectedSubcategories = selections
      ? Object.entries(selections)
          .filter(([_, value]) => value.isSelected)
          .map(([name, { svgPath }]) => ({ name, svgPath }))
      : [];

    let displayText = category.name; // Стандартное название категории
    let displayIcons = [""]; // Путь к стандартной иконке категории
    let additionalCount = 0;

    if (selectedSubcategories.length === 1) {
      // Если выбрана одна подкатегория, изменяем только название
      displayText = selectedSubcategories[0].name;
      displayIcons = [selectedSubcategories[0].svgPath]; // Добавляем иконку первой выбранной подкатегории
    } else if (selectedSubcategories.length > 1) {
      // Если выбрано две и более подкатегории, показываем иконки первых двух и стандартное название
      displayText = category.name;
      displayIcons = selectedSubcategories.slice(0, 2).map((s) => s.svgPath);
      additionalCount = Math.max(selectedSubcategories.length - 2, 0);
    }

    return {
      ...category,
      displayText,
      displayIcons,
      additionalCount,
    };
  });
});

const item = computed(() => {
  const items = Object.values(data).flat();
  return items.find((item) => item.id === parseInt(route.params.id));
});

const totalItemPrice = computed(() => {
  let totalPrice = item.value.price; // Базовая цена товара

  // Добавляем стоимость размера, если она есть
  if (orderDetails.selectedSize && orderDetails.selectedSize.price) {
    totalPrice += orderDetails.selectedSize.price;
  }

  // Добавляем стоимость каждой выбранной подкатегории из стора
  Object.entries(orderDetails.subCategoriesSelections).forEach(
    ([categoryName, selections]) => {
      const category = categories.value.find((c) => c.name === categoryName);
      if (category) {
        Object.entries(selections).forEach(([subCategoryName, isSelected]) => {
          if (isSelected) {
            const subCategory = category.subCategories.find(
              (sub) => sub.name === subCategoryName
            );
            if (subCategory) {
              totalPrice += subCategory.price || 0;
            }
          }
        });
      }
    }
  );

  return totalPrice;
});

const increment = () => {
  // Собираем все выбранные подкатегории, используя данные из стора order
  const allSelectedExtras = Object.entries(
    orderDetails.subCategoriesSelections
  ).reduce((acc, [categoryName, subCategories]) => {
    // Инициализируем категорию с пустым массивом
    acc[categoryName] = [];

    Object.entries(subCategories).forEach(
      ([subCategoryName, { isSelected, svgPath }]) => {
        if (isSelected) {
          // Для каждой выбранной подкатегории сохраняем название и svgPath
          acc[categoryName].push({ name: subCategoryName, svgPath });
        }
      }
    );

    // Удаляем категории без выбранных подкатегорий
    if (acc[categoryName].length === 0) {
      delete acc[categoryName];
    }

    return acc;
  }, {});

  const itemToAdd = {
    ...item.value, // Базовая информация о товаре
    size: orderDetails.selectedSize, // Выбранный размер
    extras: allSelectedExtras, // Группированные выбранные дополнения по категориям
    totalPrice: totalItemPrice.value,
  };

  // Добавляем товар в корзину через Pinia store
  if (!cartStore.isUpdate) {
    cartStore.addItem(itemToAdd);
    router.push(`/${userStore.path}`);
  } else {
    cartStore.updateItem(cartStore.updateItemIndex, itemToAdd);
    router.push(`/cart`);
    cartStore.clearIsUpdate();
  }
};

const selectCategory = (categoryName) => {
  const category = categories.value.find((c) => c.name === categoryName);

  // Переключение видимости extra-container и обновление активных состояний
  if (currentCategory.value && currentCategory.value.name === categoryName) {
    isExtraContainerVisible.value = !isExtraContainerVisible.value;
    if (!isExtraContainerVisible.value) {
      orderDetails.updateCurrentCategory(null);
      // currentCategory.value = null;
      categories.value.forEach((cat) => (cat.isActive = false));
    }
  } else {
    isExtraContainerVisible.value = true;
    orderDetails.updateCurrentCategory(category);

    // currentCategory.value = category;
    categories.value.forEach(
      (cat) => (cat.isActive = cat.name === categoryName)
    );
  }
};

const goBack = () => {
  if (!cartStore.isUpdate) {
    router.push(`/${userStore.path}`);
  } else {
    cartStore.clearIsUpdate();
    router.push(`/cart`);
  }
};

const handleWheelEvent = (event) => {
  if (!extraBarInner.value) return;
  const { deltaX, deltaY } = event;
  extraBarInner.value.scrollLeft += deltaY + deltaX;
  event.preventDefault(); // Предотвратить стандартное поведение прокрутки
};
</script>

<style>
@media (min-width: 640px) and (max-width: 1024px) {
  .item-bar {
    width: 70%;
    margin: auto;
  }
}

@media (min-width: 1024px) and (max-width: 1439px) {
  .item-bar {
    width: 700px;
    margin: auto;
  }
}

.button_plus {
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

.button_plus:active {
  transform: scale(0.95);
  /* Уменьшаем кнопку при нажатии */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  /* Добавляем тень для большего акцента на кнопке */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.additional-count {
  position: absolute;
  bottom: 0;
  /* Расположение внизу */
  left: 50%;
  /* Смещение влево на 50% от ширины родительского элемента */
  transform: translateX(-50%);
  /* Сдвиг элемента назад на 50% его собственной ширины для центрирования */
  background-color: #3b82f6;
  /* Белый фон */
  color: #fff;
  /* Черный текст */
  font-size: 0.8rem;
  /* Меньший размер текста для вписывания в круг */
  width: 30px;
  /* Фиксированная ширина для создания круга */
  height: 30px;
  /* Фиксированная высота для создания круга */
  line-height: 30px;
  /* Высота строки соответствует высоте для вертикального центрирования текста */
  text-align: center;
  /* Горизонтальное выравнивание текста */
  border-radius: 50%;
  /* Превращает квадрат в круг */
  z-index: 50;
  /* Убедитесь, что элемент находится поверх других элементов */
}

.extra-bar {
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: visible;
  z-index: 15;
}

.extra-bar::-webkit-scrollbar {
  display: none;
}

.scroll-container {
  padding-top: 1.25rem;
  overflow-x: auto;
}

.extra-bar-inner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  /* Убедитесь, что элементы не оборачиваются */
  -ms-overflow-style: none;
  /* IE и Edge */
  scrollbar-width: none;
  /* Firefox */
}

.extra-bar-inner > div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-align: center;
}

.scroll-container::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari и Opera */
}

.extra-bar-inner > div.is-active {
  font-weight: 500;
  color: #4a4949;
}

.extra-bar-inner > div.is-inactive {
  color: #a5a5a5;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}

.category-icon {
  width: 5.5rem;
  height: 5rem;
}

.category-item .category-icon {
  transition: transform 0.4s ease;
  transform-origin: bottom;
  transform: scale(1);
}

.extra-icon {
  height: 5rem;
}

.category-item.is-active .category-icon {
  transform-origin: bottom;
  transform: scale(1.4);
}

.category-name {
  font-size: 1.125rem /* 18px */;
  min-height: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.extra-container-product {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-radius: 0 0 25px 25px;
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
  z-index: 5;
  box-shadow: 0px 4px 8px rgba(85, 85, 85, 0.2);
  /* Пример мягкой тени */
  background-color: #e7e7e7;
  height: 67vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.extra-container-product.is-visible {
  transform: translateY(0%);
}
</style>
