<template>
  <div :id="id" class="target md:h-[3.5rem] lg:h-[3.5rem]"></div>
  <section class="section-bar">
    <h2 class="text-3xl">{{ category }}</h2>
    <div
      class="section-items grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
    >
      <NuxtLink
        :to="`/${item.id}`"
        v-for="(item, index) in items"
        :key="item.id"
        class="item rounded-lg overflow-hidden"
      >
        <template v-if="index === 0">
          <div class="video-container relative w-full h-full min-h-[50vh]">
            <video
              autoplay
              muted
              loop
              playsinline
              class="absolute top-0 left-0 w-full h-full object-cover"
              :src="item.videoSrc"
              :alt="item.name"
            ></video>
            <div class="video-info absolute bottom-0 p-6 w-full">
              <div class="flex items-center">
                <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 rounded-full"
                >
                  <PlusIcon />
                </button>
                <h3 class="flex text-white font-medium text-3xl ml-5">
                  ${{ item.price }}
                </h3>
              </div>
            </div>
          </div>
        </template>

        <template v-else>
          <div class="flex flex-col p-6">
            <img :src="item.photo" :alt="item.name" class="w-full h-auto" />
            <h3>{{ item.name }}</h3>
            <p>${{ item.price }}</p>
          </div>
        </template>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import PlusIcon from "~/components/icons/PlusIcon.vue";
export default {
  components: {
    PlusIcon,
  },
  name: "SectionBar",
  props: {
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
  },
};
</script>

<style>
.section-bar {
  display: flex;
  flex-direction: column;
  font-weight: bold;

  & > h2 {
    display: flex;
    padding: 15px 0;
  }
}

.section-items .item {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  grid-column: span 1;
  grid-row: span 1;
}

.section-items .item.row-span-2.col-span-2 {
  grid-column: span 2;
  grid-row: span 2;
}

.section-items .item:first-child {
  grid-column: span 2;
  grid-row: span 2;
}
</style>
