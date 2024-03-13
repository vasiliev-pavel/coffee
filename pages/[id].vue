<template>
  <section>
    <section class="grid grid-cols-1">
      <!-- Левая часть -->
      <div class="col-span-1 h-[60vh] relative">
        <CloseIcon
          @click="$router.back()"
          class="absolute top-0 right-0 m-5 z-10 hover:scale-110 active:scale-95 transition duration-150 ease-in-out"
        />
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
                  class="bg-blue-500 hover:bg-blue-600 text-white font-bold p-4 rounded-full"
                >
                  <PlusIcon class="h-[2rem] w-[2rem]" />
                </button>
                <h3 class="flex text-[#4A4949] font-medium text-3xl ml-2">
                  ${{ item.price }}
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
              <CupIcon class="category-icon" />
              <div class="category-name">{{ category.name }}</div>
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
        />
      </div>

      <!-- хорошо сочетается-->
      <div class="combination"></div>
    </section>
  </section>
</template>

<script setup>
definePageMeta({
  layout: "product",
});

import { ref } from "vue";
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

const route = useRoute();
const router = useRouter();

const item = computed(() => {
  const items = Object.values(data).flat();
  return items.find((item) => item.id === parseInt(route.params.id));
});
const selectedSize = ref();

const handleSizeSelect = (size) => {
  selectedSize.value = size; // Записываем выбор в локальное состояние
};

const categories = ref(
  mockCategories.map((category) => ({
    ...category,
    selectedSubcategories: [],
  }))
);

const extraBar = ref(null);
const currentCategory = ref(null);
const isExtraContainerVisible = ref(false); // по умолчанию скрыт

// для скролла Options Bar
const extraBarInner = ref(null);

const selectCategory = (categoryName) => {
  const category = categories.value.find((c) => c.name === categoryName);

  if (currentCategory.value && currentCategory.value.name === categoryName) {
    // Переключаем видимость extra-container
    isExtraContainerVisible.value = !isExtraContainerVisible.value;

    // Если extra-container теперь скрыт, обнуляем текущую категорию
    if (!isExtraContainerVisible.value) {
      currentCategory.value = null;
      // Также нужно обнулить активные состояния всех категорий
      categories.value.forEach((cat) => {
        cat.isActive = false;
      });
    }
  } else {
    isExtraContainerVisible.value = true;
    currentCategory.value = category;

    if (category) {
      currentCategory.value = category;
    }

    categories.value.forEach((cat) => {
      cat.isActive = cat.name === categoryName;
    });
  }
};

const handleWheelEvent = (event) => {
  if (!extraBarInner.value) return;
  const { deltaX, deltaY } = event;
  extraBarInner.value.scrollLeft += deltaY + deltaX;
  event.preventDefault(); // Предотвратить стандартное поведение прокрутки
};

const updateCategory = ({ categoryName, subCategory }) => {
  const category = categories.value.find((c) => c.name === categoryName);
  if (category) {
    const index = category.selectedSubcategories.findIndex(
      (sub) => sub === subCategory
    );
    if (index === -1) {
      category.selectedSubcategories.push(subCategory);
    } else {
      category.selectedSubcategories.splice(index, 1);
    }
  }
  // Можно скрыть подкатегории после выбора, если это требуется логикой приложения
  // isSubcategoriesVisible.value = false;
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
  // if (categories.value.length > 0) {
  //   const firstCategoryName = categories.value[0].name;
  //   selectCategory(firstCategoryName);
  // }
});
</script>

<style>
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
  background-color: #a5a5a5;
  height: 67vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

.extra-container.is-visible {
  transform: translateY(0%);
}
</style>
