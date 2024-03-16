<template>
  <div class="cart-page-wrapper">
    <div class="cart-items-wrapper">
      <div v-for="item in cartItems" :key="item.id" class="cart-item2">
        <img :src="item.photo" class="item-photo2" alt="Product Image" />
        <div class="item-content2">
          <div class="item-header2">
            <div class="item-name2">{{ item.name }}</div>
            <div class="item-price2">${{ item.totalPrice.toFixed(2) }}</div>
          </div>
          <div class="item-size2 mb-1">{{ item.size.volume }}</div>
          <div class="item-extras">
            <div
              v-for="(extras, category) in item.extras"
              :key="category"
              class="extras-category2"
            >
              <div class="category-name2">{{ category }}:</div>
              <div class="extras-list2">
                <span v-for="extra in extras" :key="extra" class="extra-name2"
                  >+ {{ extra }}</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="checkout-wrapper">
      <div class="total-price2 mt-3">
        <div class="cart-total-text leading-none">Total</div>
        <div class="cart-total-price leading-none">
          ${{ cartStore.totalSum.toFixed(2) }}
        </div>
      </div>
      <button class="pay-button2 rounded-3xl py-2 mt-3">Pay</button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "cart",
});

import { computed } from "vue";

const cartStore = useCart2Store();
const cartItems = computed(() => cartStore.items);
</script>

<style>
.cart-total-text {
  font-size: 1.2rem;
  font-weight: 500;
}

.cart-total-price {
  font-size: 1.7rem;
  font-weight: 400;
}

.cart-page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 93vh; /* Устанавливаем минимальную высоту страницы */
}

.cart-items-wrapper {
  overflow-y: auto;
  flex-grow: 1;
  padding-top: 20px;
  will-change: transform; /* Оптимизация прокрутки */
}

.checkout-wrapper {
  padding-bottom: 1.5rem;
  background-color: #e8e8e8;
  border-top: 1px solid #ffffff;
  position: sticky;
  bottom: 0;

  z-index: 2; /* Убедитесь, что z-index достаточно высок */
}

.checkout-area2 {
  background-color: #e8e8e8;
  padding: 1.5rem;
  border-top: 1px solid #ffffff;
}
.cart-item2 {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ffffff; /* Темнее разделительная линия */
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.item-photo2 {
  width: 80px;
  height: 80px;
  object-fit: cover;
  margin-right: 15px; /* Отступ между фото и содержимым */
}

.item-content2 {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.item-header2 {
  display: flex;
  justify-content: space-between;
}

.item-name2 {
  font-size: 1.2rem;
  font-weight: 500;
}

.item-price2 {
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
}

.item-size2 {
  color: #333;
  font-size: 0.8rem; /* Меньший шрифт для объема */
}

.extras-category2 {
  font-size: 0.8rem; /* Меньший шрифт для дополнений */
}

.category-name2 {
  color: #3d3d3d;
  font-weight: 400;
}

.extra-name2 {
  font-size: 1rem;
  font-weight: 400;
}

.extras-list2 {
  display: flex;
  flex-direction: column;
}

.total-price2 {
  display: flex;
  flex-direction: column; /* Расположение элементов в колонку */
  align-items: flex-end; /* Выравнивание элементов по правому краю */
}

.pay-button2 {
  background-color: #3b82f6;
  color: white;
  border: none;
  cursor: pointer;
  width: 100%;
  font-size: 1.3rem; /* Меньший шрифт для объема */
}
</style>
