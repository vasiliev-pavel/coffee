<template>
  <div class="cart-page2">
    <div v-for="item in cartItems" :key="item.id" class="cart-item2">
      <img :src="item.photo" class="item-photo2" alt="Product Image" />
      <div class="item-content2">
        <div class="item-header2">
          <div class="item-name2">{{ item.name }}</div>
          <div class="item-price2">${{ item.price.toFixed(2) }}</div>
        </div>
        <div class="item-size2 mb-1">{{ item.size.volume }}</div>
        <div class="item-extras">
          <div
            v-for="(extras, category) in item.extras"
            :key="category"
            class="extras-category2"
          >
            <div class="category-name2">{{ category }}:</div>
            <div class="extras-list2 text-base">
              <span v-for="extra in extras" :key="extra" class="extra-name2"
                >+ {{ extra }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="checkout-area2 mb-10">
      <div class="total-price2">Total $ {{ totalSum }}</div>
      <button class="pay-button2">Pay</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const cartStore = useCart2Store();
const cartItems = computed(() => cartStore.items);

const totalSum = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.totalPrice, 0);
});
</script>

<style>
.cart-page2 {
  padding-top: 20px;
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
  font-size: 18px;
  font-weight: 500;
}

.item-price2 {
  font-size: 1rem;
  font-weight: 500;
  color: #000000;
}

.item-size2 {
  color: #333;
  font-size: 14px; /* Меньший шрифт для объема */
}

.item-extras2 {
  margin-top: 5px;
}

.extras-category2 {
  font-size: 14px; /* Меньший шрифт для дополнений */
}

.category-name2 {
  color: #3d3d3d;
  font-weight: 400;
}

.extras-list2 .extra-name2 {
  display: flex;
  flex-direction: column;
}

.checkout-area2 {
  position: fixed;
  display: flex;
  flex-direction: column;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #ffffff; /* Темнее разделительная линия */
}

.payment-method2 select {
  margin-bottom: 20px;
}

.total-price2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.pay-button2 {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
