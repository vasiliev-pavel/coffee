// store/order.js
import { defineStore } from 'pinia';

export const useOrderStore = defineStore('order', {
  state: () => ({
    selectedSizeIndex: 0,    
    selectedSize: null, 
    currentCategory: null, // Добавляем текущую категорию
    subCategoriesSelections: {}, // Для хранения выбранных подкатегорий по категориям
  }),
  actions: {
    setSelectSize(size) {
      this.selectedSize = size;
    },    
    setIndex(index) {
      this.selectedSizeIndex = index;
    },
    updateCurrentCategory(category) {
      this.currentCategory = category;
    },
    selectSubCategory(categoryName, subCategoryName, isSelected) {
      if (!this.subCategoriesSelections[categoryName]) {
        this.subCategoriesSelections[categoryName] = {};
      }
      this.subCategoriesSelections[categoryName][subCategoryName] = isSelected;
    },

    clearSelected() {
      this.selectedSizeIndex = 0;
      this.selectedSize = null;
      this.subCategoriesSelections = {};
    }

  },
});
