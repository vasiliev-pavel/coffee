<template>
  <div class="main">
    <CategoryBar />
    <SectionBar
      id="hot_coffee"
      category="Hot Coffee"
      :items="categories.hot_coffee"
    />
    <SectionBar
      id="cold_coffee"
      category="Cold Coffee"
      :items="categories.cold_coffee"
    />
    <SectionBar id="tea" category="Tea" :items="categories.tea" />
    <SectionBar
      id="hot_chocolate"
      category="Hot Chocolate"
      :items="categories.hot_chocolate"
    />
    <SectionBar
      id="sweet_bakery"
      category="Sweet Bakery"
      :items="categories.sweet_bakery"
    />
    <SectionBar
      id="savoury_bakery"
      category="Savoury Bakery"
      :items="categories.savoury_bakery"
    />
    <SectionBar
      id="specialty"
      category="Specialty"
      :items="categories.specialty"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { data } from "~/mock.ts";

const orderDetails = useOrderStore();
const product = useProductsStore();

// Подготовка данных из mock.ts для использования в шаблоне
const categories = ref({
  hot_coffee: data.hot_coffee,
  cold_coffee: data.cold_coffee,
  tea: data.tea,
  hot_chocolate: data.hot_chocolate,
  sweet_bakery: data.sweet_bakery,
  savoury_bakery: data.savoury_bakery,
  specialty: data.specialty,
});

onMounted(() => {
  orderDetails.clearSelected();
  product.fetchProductsAndCategories();
  product.fetchDefaultAvailableAddons();
});
</script>

<style>
.main {
  padding-bottom: 20rem;
}
</style>
