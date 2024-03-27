<template>
  <div class="main">
    <CategoryBar />
    <SectionBar
      v-for="(category, index) in categories"
      :key="index"
      :id="category.hash.slice(1)"
      :category="category.categoryName"
      :items="category.productIds"
    />
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const orderDetails = useOrderStore();
const productStore = useProductsStore();
const addons = useAddOnsStore();

// Вычисляемое свойство для категорий, полученных из productStore
const categories = computed(() => {
  return Object.values(productStore.categories);
});

onMounted(() => {
  orderDetails.clearSelected();
  productStore.fetchProductsAndCategories();
  addons.fetchExtras();
  addons.fetchDefaultExtras();
  addons.fetchAnAvailableExtras();
  addons.fetchExtrasInProductCategories();
});
</script>

<style>
.main {
  padding-bottom: 20rem;
}
</style>
