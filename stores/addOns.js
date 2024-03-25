import { defineStore } from 'pinia';

export const useAddOnsStore = defineStore('addOns', {
    state: () => ({
        // Структура данных для всех дополнений 
        // Первым ключом является ключ категории дополнения
        extras: {},
        // выбранные по дефолту подкатегории
        defaultExtras:{},
        // подкатегории которые следует убрать
        anAvailableExtras:{},
        // категории дополнений к категории продуктов
        extrasAndProductCategories: {},
        isLoading: false,
        error: null,
    }),
    actions: {
        // Обобщённая функция для выполнения запросов
        async fetchData(endpoint, stateKey) {
            this.isLoading = true;
            try {
                const { data, error } = await $fetch(`/api/user/${endpoint}`);
                if (error) throw error;
                this[stateKey] = data;
            } catch (error) {
                console.error(error);
                this.error = error;
            } finally {
                this.isLoading = false;
            }
        },

        // Функции для запроса конкретных данных, использующие обобщённую функцию
        fetchExtras() {
            return this.fetchData('extras', 'extras');
        },
        fetchDefaultExtras() {
            return this.fetchData('defaultAddons', 'defaultExtras');
        },
        fetchAnAvailableExtras() {
            return this.fetchData('anAvailableAddons', 'anAvailableExtras');
        },
        fetchExtrasInProductCategories() {
            return this.fetchData('productAddons', 'extrasAndProductCategories');
        },
    }
});
