<template>
  <div class="cart-page-wrapper">
    <div class="cart-items-wrapper">
      <div
        v-for="(item, index) in cartItems"
        :key="item.id"
        class="cart-item2"
        @click="handleItemClick(item, index)"
      >
        <img :src="item.photo" class="item-photo2" alt="Product Image" />
        <div class="item-content2">
          <div class="item-header2">
            <div class="item-name2 leading-none">{{ item.name }}</div>
            <div class="item-price2 leading-none">
              ${{ item.totalPrice.toFixed(2) }}
            </div>
          </div>
          <div class="item-size2 mb-1 leading-none">{{ item.size.volume }}</div>
          <div class="item-extras">
            <div
              v-for="(extras, category) in item.extras"
              :key="category"
              class="extras-category2"
            >
              <div class="category-name2">{{ category }}:</div>
              <div class="extras-list2">
                <!-- Теперь extra это объект, так что нам нужно использовать extra.name -->
                <span
                  v-for="extra in extras"
                  :key="extra.name"
                  class="extra-name2"
                >
                  + {{ extra.name }}
                </span>
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
const orderDetails = useOrderStore();
const userStore = useUserStore();

const cartItems = computed(() => cartStore.items);
const router = useRouter();

function handleItemClick(item, index) {
  orderDetails.clearSelected();
  cartStore.setIsUpdate(true, index);
  orderDetails.setSelectSize(item.size);

  // Восстанавливаем выбранные подкатегории
  Object.entries(item.extras || {}).forEach(([categoryName, extras]) => {
    extras.forEach(({ name: subCategoryName, svgPath }) => {
      orderDetails.selectSubCategory(
        categoryName,
        subCategoryName,
        true,
        svgPath
      );
    });
  });
  userStore.setUserMadeSelection(true);
  router.push(`/${item.itemID}`);
}

const confirmPay = async () => {
  try {
    // Запрашиваем сессию Stripe для оплаты
    const { data: session } = await useFetch(`/api/payment/`, {
      method: "post",
      body: {
        line_items: await createLineItems(),
      },
    });
    // Перенаправляем пользователя на Stripe
    if (session && session.value.url) {
      navigateTo(`${session.value.url}`, { external: true });
    } else {
      console.error("Ошибка: URL сессии Stripe не получен");
    }
  } catch (error) {
    console.error("Ошибка при инициации сессии оплаты:", error);
  }
};

const createPrice = async () => {
  try {
    const price = await $fetch(`/api/payment/price`, {
      method: "post",
      body: {
        amount: 100,
        name: "Cappuccino",
      },
    });
    console.log(price);
    return price.id;
  } catch (error) {
    console.error("Ошибка при создании цены:", error);
  }
};

const createLineItems = async () => {
  return [
    {
      price: await createPrice(),
      quantity: 1,
    },
  ];
  //   return Object.values(selectedServices).map((service) => ({
  //     price: service.price_id,
  //     quantity: 1,
  //   }));
};
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
  /* background-color: #e8e8e8; */
  padding: 1.5rem;
  border-top: 1px solid #ffffff;
}
.cart-item2 {
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #ffffff; /* Темнее разделительная линия */
  padding-bottom: 10px;
  margin-top: 10px;
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
  font-size: 0.9rem; /* Меньший шрифт для объема */
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
