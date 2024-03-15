<template>
  <div class="cart-list gap-6">
    <div
      class="cart-item grid grid-cols-6 rounded"
      v-for="item in cartItems"
      :key="item.id"
    >
      <div class="cart-media">
        <img :src="item.photo" alt="Product photo" class="product-photo" />
      </div>
      <div class="cart-info">
        <h3>#{{ item.id }} | {{ item.name }}</h3>
        <div>${{ item.price }}</div>
        <div>Количество: {{ item.quantity }}</div>
      </div>
      <div class="cart-action">
        <button @click="removeFromCart(item.id)">X</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { extras, categories, data } from "@/mock";

const cartStore = useCart2Store();

const cartItems = computed(() => {
  return Object.values(cartStore.items)
    .map((cartItem) => {
      for (const categoryKey in data) {
        const foundItem = data[categoryKey].find(
          (item) => item.id === cartItem.id
        );
        if (foundItem) {
          return {
            ...foundItem,
            quantity: cartItem.quantity,
          };
        }
      }
      return null;
    })
    .filter((item) => item !== null);
});

// Функция для удаления товара из корзины по ID
const removeFromCart = (id) => {
  cartStore.removeItem(id);
};
</script>

<style>
.cart-list {
  display: flex;
  flex-direction: column;

  & > .cart-item {
    display: grid;
    align-items: center;
    padding: 15px;
    background-color: #fff;
    box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;

    & > .cart-media {
      display: grid;
      grid-column: span 2;
    }

    & > .cart-info {
      display: grid;
      grid-column: span 3;
    }

    & > .cart-action {
      display: grid;
      grid-column: span 1;
    }

    img {
      transition: 0.5s all;
      height: 200px;
    }

    &:hover {
      box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;

      img {
        transform: scale(1.1);
      }
    }
  }
}
</style>
