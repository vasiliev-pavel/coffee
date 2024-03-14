<template>
    <h1>Kitchen #{{ kitchenId }}:</h1>
    <div class="display-list">
        <button class="display-item" v-for="order in orders" :key="order.id">
            <h3 class="text-xl font-bold">{{ order.title }}</h3>
            <span class="text-sm">{{ order.time }}</span>
            <p class="text-gray-600">{{ order.description }}</p>
        </button>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "display",
});
const route = useRoute();
const kitchenId = route.params.id;
const orders = ref([
    { id: 1, title: "Order 1", time: "10:00", description: "Order 1 description" },
    { id: 2, title: "Order 2", time: "10:30", description: "Order 2 description" },
]);
</script>