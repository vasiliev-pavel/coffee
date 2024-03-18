<template>
    <h1>Tickets </h1>
    <div class="display-list">
        <button class="display-item" v-for="order in orders" :key="order.id"
            :style="{ backgroundColor: order.backgroundColor }">
            <h3 class="text-xl font-bold">{{ order.title }}</h3>
            <span class="text-sm">{{ order.formattedPlacementTime }} - {{ order.formattedTime }} ({{ order.remainingTime
                }})</span>
            <p class="text-gray-600">{{ order.description }}</p>
        </button>
    </div>
</template>

<script setup>
import { differenceInSeconds, format, formatDistanceToNow } from 'date-fns';
definePageMeta({
    layout: "display",
});
const orders = ref([
    { id: 1, title: "Order 1", placementTime: "2024-03-18T01:56:00", pickupTime: "2024-03-18T01:58:00", description: "Order 1 description", remainingTime: '', formattedPlacementTime: '', formattedTime: '' },
    { id: 2, title: "Order 2", placementTime: "2024-03-18T01:56:00", pickupTime: "2024-03-18T01:59:00", description: "Order 2 description", remainingTime: '', formattedPlacementTime: '', formattedTime: '' },
]);

const updateOrdersData = () => {
    const now = new Date();
    orders.value.forEach(order => {
        const placementTime = new Date(order.placementTime);
        const pickupTime = new Date(order.pickupTime);

        const minutesTotal = differenceInSeconds(pickupTime, placementTime);
        const minutesElapsed = differenceInSeconds(now, placementTime);
        const minutesRemaining = differenceInSeconds(pickupTime, now);

        const percentageElapsed = (minutesElapsed / minutesTotal) * 100;
        order.remainingTime = formatDistanceToNow(pickupTime, { includeSeconds: true, addSuffix: true });

        if (percentageElapsed <= 50) {
            order.backgroundColor = '#38a169'; // Зеленый
        } else if (percentageElapsed <= 75) {
            order.backgroundColor = '#ed8936'; // Оранжевый
        } else {
            order.backgroundColor = '#e53e3e'; // Красный
        }

        // Форматирование времени
        order.formattedPlacementTime = format(placementTime, 'pp');
        order.formattedTime = format(pickupTime, 'pp');
    });
};

let intervalId;

onMounted(() => {
    updateOrdersData();
    intervalId = setInterval(updateOrdersData, 20000); // 20 sec
});

onUnmounted(() => {
    clearInterval(intervalId);
});

</script>

<style>
.display-item {
    cursor: pointer;
    transition: background-color 0.5s ease;
}
</style>