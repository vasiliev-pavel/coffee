import { defineStore } from "pinia";
import { reactive, ref, watch } from "vue";

interface CartItemCustomOptions {
    milk?: boolean;
    sugar?: 'brown' | 'white' | null;
    sprinkle?: 'colorful' | 'chocolate' | null;
}

interface CartItem {
    id: number;
    price: number;
    quantity: number;
    size: number;
    options: CartItemCustomOptions;
}

type CartItems = Record<number, CartItem>;

export const useCartStore = defineStore("cart", () => {
    const items = reactive<CartItems>({});
    const total = ref(0);
    const itemOrder = ref<number[]>([]);

    const addItem = (
        id: number,
        price: number,
        quantity: number = 1,
        size: number,
        options: CartItemCustomOptions
    ) => {
        if (items[id]) {
            items[id].quantity += quantity;
        } else {
            items[id] = { id, price, quantity, size, options };
            itemOrder.value.push(id);
        }
        calculateTotal();
    };

    const editItemQuantity = (id: number, quantity: number) => {
        if (items[id]) {
            items[id].quantity = quantity;
            calculateTotal();
        }
    };

    const removeItem = (id: number) => {
        if (items[id]) {
            delete items[id];
            const index = itemOrder.value.indexOf(id);
            if (index > -1) {
                itemOrder.value.splice(index, 1);
            }
            calculateTotal();
        }
    };

    const resetCart = () => {
        for (const id in items) {
            delete items[id];
        }
        itemOrder.value = [];
        total.value = 0;
    };


    const getLastThreeItems = computed(() => {
        const lastThreeIds = itemOrder.value.slice(-3);
        return lastThreeIds.map(id => items[id]);
    });

    const calculateTotal = () => {
        total.value = Object.values(items).reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    };

    watch(items, calculateTotal, { deep: true });

    return { items, total, addItem, editItemQuantity, removeItem, resetCart, getLastThreeItems };
}, { persist: true });
