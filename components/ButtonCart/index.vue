<template>
  <div class="pay-cart" v-if="hasItemsInCart">
    <button class="pay-button-cart rounded-[5rem]" @click="goToCart">
      <div class="pay-info flex justify-between items-center w-full">
        <div class="pay-icon-container rounded-[5rem]">
          <PayIcon />
        </div>
        <div class="summary-in-cart text-white px-4">
          {{ totalSum.toFixed(2) }}
        </div>
        <div class="last-in-cart flex">
          <img
            v-for="(item, index) in lastThreeItems"
            :key="index"
            :src="item.photo"
            class="item-icon"
          />
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import PayIcon from "~/components/icons/PayIcon.vue";

const router = useRouter();
const cartStore = useCart2Store();

const cartItems = computed(() => cartStore.items);

const hasItemsInCart = computed(() => cartItems.value.length > 0);

const lastThreeItems = computed(() => {
  // Возвращаем последние три элемента из корзины
  return cartItems.value.slice(-3);
});

const totalSum = computed(() => {
  return cartItems.value.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
});

function goToCart() {
  router.push("/cart");
}
</script>

<style>
.pay-icon-container {
  width: 4.5rem; /* или другой размер, который вам нужен */
  height: 50px; /* сделаем высоту меньше ширины для овальной формы */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #999999; /* фон, если нужен */
}

.last-in-cart {
  display: flex;
  align-items: center;
}

.item-icon {
  width: 50px; /* Задаем квадратные размеры для создания круга */
  height: 50px; /* Высота равна ширине */
  border-radius: 50%; /* Делаем иконки круглыми */
  background-color: #999999;
  object-fit: cover; /* Обеспечиваем корректное отображение изображений */
  margin-left: -27px; /* Слегка уменьшили наложение для круглых иконок */
  position: relative;
  z-index: 1;
}

.item-icon:first-child {
  margin-left: 0;
}

.item-icon:nth-child(2) {
  z-index: 2;
}

.item-icon:nth-child(3) {
  z-index: 3;
}

.pay-cart {
  position: fixed;
  bottom: 12%;
  left: 0;
  right: 0;
  z-index: 50;
}

.pay-button-cart {
  display: flex;
  justify-content: center; /* Центрируем содержимое кнопки */
  align-items: center;
  background-color: #2d2d2d;
  padding: 7px; /* Внутренние отступы */
  width: auto; /* Занимаем всю доступную ширину */
  margin: auto;
  transition: 0.3s all;
}

.pay-info {
  display: flex; /* Для выравнивания цены и иконок в одну линию */
  align-items: center; /* Вертикальное выравнивание */
}

.summary-in-cart {
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-align: center;
}
</style>
