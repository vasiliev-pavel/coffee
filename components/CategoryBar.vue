<template>
  <div
    class="category-bar flex md:sticky md:top-2 lg:sticky lg:top-2 left-0 right-0 z-10 md:rounded lg:rounded fixed bottom-0 top-auto text-xl"
    ref="categoryBar">
    <NuxtLink v-for="category in categories" :key="category.hash" :to="{ path: '/', hash: category.hash }"
      @click="centerCategory($event, category.hash)" :class="{
      'is-active': category.isActive,
      'is-inactive': !category.isActive,
    }">{{ category.name }}</NuxtLink>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { categories as mockCategories } from "~/mock.ts";

const categories = ref(mockCategories);

const categoryBar = ref(null);

const centerCategory = (event, categoryHash) => {
  categories.value.forEach((category) => {
    category.isActive = category.hash === categoryHash;
  });

  const clickedElement = event.currentTarget;
  const scrollAmount =
    clickedElement.offsetLeft -
    categoryBar.value.offsetWidth / 2 +
    clickedElement.offsetWidth / 2;

  categoryBar.value.scroll({
    left: scrollAmount,
    behavior: "smooth",
  });
};
</script>

<style>
.category-bar {
  background-color: #2d2d2d;
  transition: 0.5s all;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  white-space: nowrap;
  padding: 15px 0;
  -ms-overflow-style: none;
  /* IE и Edge */
  scrollbar-width: none;
  /* Firefox */
}

.category-bar::-webkit-scrollbar {
  display: none;
  /* Chrome, Safari и Opera */
}

.category-bar>a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  padding: 0 20px;
  flex-grow: 1;
  text-align: center;
}

.category-bar>a.is-active {
  font-weight: bold;
  color: #ffffff;
}

.category-bar>a.is-inactive {
  color: #c5c5c5;
}
</style>
