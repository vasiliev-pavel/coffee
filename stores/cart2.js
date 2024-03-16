import { defineStore } from 'pinia';

export const useCart2Store = defineStore('cart', {
  state: () => ({
    items: [], // Товары в корзине
  }),
  getters: {
    // Возвращает общую сумму товаров в корзине, учитывая их количество
    totalSum(state) {
      return state.items.reduce((acc, item) => acc + (item.totalPrice * item.quantity), 0);
    },
    // Возвращает последние три добавленных товара
    lastThreeItems(state) {
      return state.items.slice(-3);
    },
  },
  actions: {
    addItem(item) {
      // Проверяем, существует ли уже такой товар в корзине с теми же параметрами
      const existingItem = this.items.find(i => 
        i.id === item.id &&
        i.size.label === item.size.label &&
        JSON.stringify(i.extras) === JSON.stringify(item.extras)
      );
      
      if (existingItem) {
        // Если товар уже есть, увеличиваем его количество
        existingItem.quantity += item.quantity;
      } else {
        // Если товара еще нет, добавляем его в корзину с количеством 1
        this.items.push({
          ...item,
          quantity: 1
        });
      }
    }
  },
});
