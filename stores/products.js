import { defineStore } from 'pinia'
// Импортируйте ваш клиент Supabase, если это необходимо для вызова функции

export const useProductsStore = defineStore('products', {
    state: () => ({
        categories: {},
        products: {},
        isLoading: true,
        error: null
    }),
    actions: {
        async fetchProductsAndCategories() {
            this.isLoading = true;
            try {
                // Здесь должен быть ваш код для вызова Supabase функции
                // Например, используя serverSupabaseClient из Nuxt или другой клиентский код
                const { data, error } = await $fetch(`/api/user/product`);

                if (error) throw error;

                this.categories = data.categories;
                this.products = data.products;
            } catch (error) {
                console.error(error);
                this.error = error;
            } finally {
                this.isLoading = false;
            }
        },
    }
   
});
