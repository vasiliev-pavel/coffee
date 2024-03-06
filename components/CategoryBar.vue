<template>
  <div
    class="category-bar flex md:sticky md:top-2 lg:sticky lg:top-2 left-0 right-0 z-50 md:rounded lg:rounded fixed bottom-0 top-auto"
    ref="categoryBar"
  >
    <NuxtLink
      v-for="category in categories"
      :key="category.hash"
      :to="{ path: '/', hash: category.hash }"
      @click="centerCategory($event)"
      >{{ category.name }}</NuxtLink
    >
  </div>
</template>

<script setup>
import { ref } from "vue";

const categories = ref([
  { name: "Hot Chocolate", hash: "#hot_chocolate" },
  { name: "Hot Coffee", hash: "#hot_coffee" },
  { name: "Cold Coffee", hash: "#cold_coffee" },
  { name: "Tea", hash: "#tea" },
  { name: "Snacks", hash: "#snacks" },
  { name: "Backery", hash: "#backery" },
]);

const categoryBar = ref(null);

const centerCategory = (event) => {
  const clickedElement = event.currentTarget;

  // Вычисляем необходимый сдвиг для центрирования
  const scrollAmount =
    clickedElement.offsetLeft -
    categoryBar.value.offsetWidth / 2 +
    clickedElement.offsetWidth / 2;

  // Прокручиваем к элементу
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
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */
}

.category-bar::-webkit-scrollbar {
  display: none; /* Chrome, Safari и Opera */
}

.category-bar > a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  padding: 0 20px;
  flex-grow: 1;
  text-align: center;
}

@media screen {
}
</style>
