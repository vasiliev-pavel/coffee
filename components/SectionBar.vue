<template>
  <div :id="id" class="target md:h-[3.5rem] lg:h-[3.5rem]"></div>
  <section class="main-section-bar">
    <h2 class="text-3xl">{{ category }}</h2>
    <div
      class="main-section-items grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      <NuxtLink
        v-for="(item, index) in items"
        :key="item"
        :to="`/${item}`"
        class="item rounded-[1.5rem] overflow-hidden"
      >
        <template v-if="index === 0">
          <div class="video-container relative w-full h-full min-h-[50vh]">
            <video
              autoplay
              muted
              loop
              playsinline
              class="absolute top-0 left-0 w-full h-full object-cover"
              :src="productStore.products[item].videoSrc"
              :alt="productStore.products[item].name"
            ></video>
            <div class="video-info absolute bottom-0 p-6 w-full">
              <div class="flex items-center">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full"
                >
                  <PlusIcon />
                </button>
                <h3 class="flex text-white font-medium text-3xl ml-5">
                  ${{ productStore.products[item].price }}
                </h3>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="main-item-container p-5 font-medium font-kanit">
            <img
              :src="productStore.products[item].photo"
              :alt="productStore.products[item].name"
              class="main-item-image"
            />
            <div class="main-text-container">
              <h3 class="main-item-name">
                {{ productStore.products[item].name }}
              </h3>
              <p class="main-item-price text-xl">
                ${{ productStore.products[item].price }}
              </p>
            </div>
          </div>
        </template>
      </NuxtLink>
    </div>
  </section>
</template>

<script setup>
import PlusIcon from "~/components/icons/PlusIcon.vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  id: {
    type: [String, Number],
    default: "",
  },
  category: {
    type: [String, Number],
    default: "",
  },
});

const productStore = useProductsStore();
</script>

<style>
.main-section-bar {
  display: flex;
  flex-direction: column;
  font-weight: bold;

  & > h2 {
    display: flex;
    padding: 15px 0;
  }
}

.main-section-items .item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
  transition: 0.3s all;

  img {
    transition: 0.5s all;
  }

  &:hover {
    box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;

    img {
      transform: scale(1.1);
    }
  }

  grid-column: span 1;
  grid-row: span 1;
}

.main-section-items .item.row-span-2.col-span-2 {
  grid-column: span 2;
  grid-row: span 2;
}

.main-section-items .item:first-child {
  grid-column: span 2;
  grid-row: span 2;
}

@media (min-width: 640px) and (max-width: 1024px) {
  .main-section-items .item:first-child {
  }
}

.main-item-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Обеспечивает распределение пространства между изображением и текстовым контентом */
}

.main-item-image {
  width: 100%;
  /* Поддерживает ширину изображения */
  object-fit: cover;
  /* Обеспечивает заполнение пространства изображением без искажения */
  height: auto;
  /* Поддерживает адаптивную высоту изображения */
}

.main-text-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Распределяет текст внутри контейнера */
  height: 6em;
  /* Ограничивает максимальную высоту текстового блока */
  overflow: hidden;
  /* Скрывает текст, выходящий за пределы */
}

.main-item-name {
  display: flex;
  align-items: center;
  /* Выравнивает текст по центру по вертикали */
  height: 4em;
  /* Фиксированная высота для поддержания до 3 строк */
  text-align: left;
  /* Выравнивание текста по левому краю */
  align-self: flex-start;
  /* Прижимает к левому краю */
  -webkit-box-orient: vertical;
  margin: 0;
  /* Убираем маржин, если он был задан */
  width: calc(100% - 10px);
  /* Учитываем отступ в ширине */
}

.main-item-price {
  align-self: flex-start;
  /* Прижимает к левому краю */
}

@media (min-width: 0px) and (max-width: 768px) {
  .video-container {
    min-height: 50vh;
  }
}

@media (min-width: 768px) {
  .video-container {
    min-height: 40vh;
  }
}

@media (min-width: 1024px) {
  .video-container {
    min-height: 30vh;
  }
}
</style>
