<template>
  <section>
    <section class="grid grid-cols-1">
      <!-- Левая часть -->
      <div class="col-span-1 h-[60vh] relative">
        <Transition name="fade">
          <CloseIcon
            v-show="!isExtraContainerVisible"
            @click="goBack"
            class="absolute top-0 right-0 m-5 z-10 hover:scale-110 active:scale-95 transition duration-150 ease-in-out"
        /></Transition>
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
                  <PlusIcon class="h-[2rem] w-[2rem]" />
                </button>

                <h3 class="flex text-[#4A4949] font-medium text-3xl ml-2">
                  ${{ totalItemPrice }}
                </h3>
              </div>

              <SizeSelector @update:selectedSize="handleSizeSelect" />
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
              v-for="category in categories"
              :key="category.name"
              @click="selectCategory(category.name)"
              :class="{
                'is-active': category.isActive,
                'is-inactive': !category.isActive,
              }"
              class="category-item"
            >
              <div class="relative">
                <CupIcon class="category-icon" />
                <div
                  v-show="category.additionalCount > 0"
                  class="additional-count"
                >
                  +{{ category.additionalCount }}
                </div>
              </div>

              <div class="category-name">{{ category.displayName }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Контейнер с выбором -->
      <div
        class="extra-container"
        :class="{ 'is-visible': isExtraContainerVisible }"
      >
        <SubcategoryBar
          v-if="
            currentCategory &&
            currentCategory.subCategories &&
            currentCategory.subCategories.length > 0
          "
          :currentCategory="currentCategory"
          @update:categoryState="handleCategoryStateUpdate"
        />

        <div
          v-show="isExtraContainerVisible"
          class="absolute bottom-0 text-[#4A4949] font-medium text-2xl mb-14"
        >
          ${{ totalItemPrice }}
        </div>
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
import {
  startDragging,
  stopDragging,
  handleDragging,
} from "~/utils/dragToScroll";
import { data } from "~/mock.ts";
import { onBeforeRouteLeave } from "vue-router";

definePageMeta({
  layout: "product",
});

const route = useRoute();
const router = useRouter();
const userStore = useUserStore(); // Используем Pinia store
const cartStore = useCart2Store(); // Используем Pinia store
const selectedSubcategories = ref([]); // Хранилище для выбранных подкатегорий
const categoryStates = ref({});
const selectedSize = ref();
const categories = ref(
  mockCategories.map((category) => ({
    ...category,
    originalName: category.name,
    displayName: category.name, // Это название будет обновляться
    additionalCount: 0, // Инициализируем счётчик дополнительных выборов
  }))
);
const extraBar = ref(null);
const extraBarInner = ref(null);
const currentCategory = ref(null);
const isExtraContainerVisible = ref(false); // по умолчанию скрыт

const item = computed(() => {
  const items = Object.values(data).flat();
  return items.find((item) => item.id === parseInt(route.params.id));
});

const totalItemPrice = computed(() => {
  let totalPrice = item.value.price; // Базовая цена товара

  // Добавляем стоимость размера, если она есть
  if (selectedSize.value && selectedSize.value.price) {
    totalPrice += selectedSize.value.price;
  }

  // Добавляем стоимость каждой выбранной подкатегории
  Object.entries(categoryStates.value).forEach(
    ([categoryName, { selectedSubcategories }]) => {
      selectedSubcategories.forEach((subcategory) => {
        // Предположим, что у subcategory есть свойство price
        totalPrice += subcategory.price || 0;
      });
    }
  );

  return totalPrice;
});

const handleSizeSelect = (size) => {
  selectedSize.value = size; // Записываем выбор в локальное состояние
};

const updateCategoryState = (
  categoryName,
  selectedSubcategories,
  activeName
) => {
  // Если выбранных подкатегорий нет, удаляем категорию из состояния
  if (selectedSubcategories.length === 0) {
    delete categoryStates.value[categoryName];
  } else {
    categoryStates.value[categoryName] = {
      selectedSubcategories,
      activeName,
    };
  }
};

const handleCategoryStateUpdate = ({
  categoryName,
  selectedSubCategories,
  additionalCount,
}) => {
  // Находим текущую категорию и обновляем её состояние
  if (currentCategory.value) {
    const categoryToUpdate = categories.value.find(
      (c) => c.name === currentCategory.value.name
    );
    if (categoryToUpdate) {
      categoryToUpdate.displayName = categoryName;
      categoryToUpdate.additionalCount = additionalCount; // Обновляем счётчик дополнительных выборов
    }

    // Обновляем состояние selectedSubcategories и categoryStates для текущей категории
    selectedSubcategories.value = selectedSubCategories;
    updateCategoryState(
      currentCategory.value.name,
      selectedSubCategories,
      categoryName
    );
  }
};

const increment = () => {
  // Собираем все выбранные подкатегории, группируя их по категориям
  const allSelectedExtras = Object.entries(categoryStates.value).reduce(
    (acc, [categoryName, { selectedSubcategories }]) => {
      // Если в категории есть выбранные подкатегории, добавляем их в аккумулятор
      if (selectedSubcategories.length > 0) {
        acc[categoryName] = selectedSubcategories.map(
          (subcategory) => subcategory.name
        );
      }
      return acc;
    },
    {}
  );

  const itemToAdd = {
    ...item.value, // Базовая информация о товаре
    size: selectedSize.value, // Выбранный размер
    extras: allSelectedExtras, // Группированные выбранные дополнения по категориям
    quantity: 1, // Количество
    totalSum: totalItemPrice,
  };

  // Добавляем товар в корзину через Pinia store
  cartStore.addItem(itemToAdd);
};

const selectCategory = (categoryName) => {
  const category = categories.value.find((c) => c.name === categoryName);

  // Переключение видимости extra-container и обновление активных состояний
  if (currentCategory.value && currentCategory.value.name === categoryName) {
    isExtraContainerVisible.value = !isExtraContainerVisible.value;
    if (!isExtraContainerVisible.value) {
      currentCategory.value = null;
      categories.value.forEach((cat) => (cat.isActive = false));
    }
  } else {
    isExtraContainerVisible.value = true;
    currentCategory.value = category;
    categories.value.forEach(
      (cat) => (cat.isActive = cat.name === categoryName)
    );
  }
};

const goBack = () => {
  router.push(`/${userStore.path}`);
};

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

const handleWheelEvent = (event) => {
  if (!extraBarInner.value) return;
  const { deltaX, deltaY } = event;
  extraBarInner.value.scrollLeft += deltaY + deltaX;
  event.preventDefault(); // Предотвратить стандартное поведение прокрутки
};
</script>

<style>
.button_plus {
  transition: transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out;
}

.button_plus:active {
  transform: scale(0.95); /* Уменьшаем кнопку при нажатии */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Добавляем тень для большего акцента на кнопке */
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
  position: absolute; /* Изменено с fixed на absolute */
  bottom: 0px;
  right: 0px;
  background-color: #3b82f6; /* Белый фон */
  color: #fff; /* Черный текст */
  font-size: 0.8rem; /* Меньший размер текста для вписывания в круг */
  width: 30px; /* Фиксированная ширина для создания круга */
  height: 30px; /* Фиксированная высота для создания круга */
  line-height: 30px; /* Высота строки соответствует высоте для вертикального центрирования текста */
  text-align: center; /* Горизонтальное выравнивание текста */
  border-radius: 50%; /* Превращает квадрат в круг */
  z-index: 50; /* Убедитесь, что элемент находится поверх других элементов */
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
  flex-wrap: nowrap; /* Убедитесь, что элементы не оборачиваются */
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
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

.extra-container {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-radius: 0 0 25px 25px;
  transform: translateY(-100%);
  transition: transform 0.5s ease-in-out;
  z-index: 5;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Пример мягкой тени */
  background-color: #dddddd;
  height: 67vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.extra-container.is-visible {
  transform: translateY(0%);
}
</style>
