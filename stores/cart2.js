import { defineStore } from 'pinia';

export const useCart2Store = defineStore('cart', {
  state: () => ({
    items: [],
    isUpdate: false, 
    updateItemIndex:null,
  }),
  getters: {
    // Возвращает общую сумму товаров в корзине, учитывая их количество
    totalSum(state) {
      return state.items.reduce((acc, item) => acc + item.totalPrice, 0);
    },
    // Возвращает последние три добавленных товара
    lastThreeItems(state) {
      return state.items.slice(-3);
    },
  },
  actions: {
    addItem(item) {
       // Всегда добавляем новый товар в корзину, даже если такой уже есть
      this.items.push({
        ...item,
      });
      // // Проверяем, существует ли уже такой товар в корзине с теми же параметрами
      // const existingItem = this.items.find(i => 
      //   i.id === item.id &&
      //   i.size.label === item.size.label &&
      //   JSON.stringify(i.extras) === JSON.stringify(item.extras)
      // );
      
      // if (existingItem) {
      //   // Если товар уже есть, увеличиваем его количество
      //   existingItem.quantity += item.quantity;
      // } else {
      //   // Если товара еще нет, добавляем его в корзину с количеством 1
      //   this.items.push({
      //     ...item,
      //     quantity: 1
      //   });
      // }
    }, 
    updateItem(itemIndex, updatedItem) {
      if (itemIndex !== -1) {
        this.items[itemIndex] = updatedItem;
      }
    },
    setIsUpdate(data, index) {
      this.isUpdate = data;      
      this.updateItemIndex = index;
    },
    clearIsUpdate() {
      this.isUpdate = false;
      this.updateItemIndex = null;
    }
  },
});
