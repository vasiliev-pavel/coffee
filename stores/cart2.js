// cartStore.js

import { defineStore } from 'pinia';

export const useCart2Store = defineStore('cart', {
  state: () => ({
    items: [], // Товары в корзине
  }),
  actions: {
    addItem(item) {
      // Проверяем, существует ли уже такой товар в корзине
      const existingItem = this.items.find(i => 
        i.id === item.id &&
        i.size === item.size &&
        JSON.stringify(i.extras) === JSON.stringify(item.extras)
      );

      if (existingItem) {
        // Если товар существует, увеличиваем его количество
        existingItem.quantity += item.quantity;
      } else {
        // Если нет, добавляем новый товар в корзину
        this.items.push(item);
      }
    },
  }
});
