<template>
  <div class="pay-cart">
    <button class="pay-button-cart rounded" @click="goToCart">
      <div class="pay-info">
        <div class="summary-in-cart">
          {{ totalSum }}
        </div>
        <div class="last-in-cart">
          {{ lastThreeIds }}
        </div>
      </div>
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const cartStore = useCartStore();
const router = useRouter();

function goToCart() {
  router.push("/cart");
}

const totalSum = computed(() => {
  //   return `$${cartStore.total.toFixed(2)}`;
});

const lastThreeIds = computed(() => {
  // return cartStore.getLastThreeItems.value?.map((item) => item.id) || [];
});
</script>

<style>
.pay-cart {
  position: fixed;
  bottom: 5%;
  left: 0;
  right: 0;
  z-index: 50;
}

.pay-button-cart {
  display: flex;
  background-color: #fff;
  box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
  width: 30%;
  margin: auto;
  transition: 0.3s all;

  &:hover {
    box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;
  }
}
</style>
