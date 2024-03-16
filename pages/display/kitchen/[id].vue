<template>
    <h1>Kitchen #{{ kitchenId }}:</h1>
    <div class="display-list">
        <button class="display-item" v-for="order in orders" :key="order.id" :style="timeStyle(order)">
            <h3 class="text-xl font-bold">{{ order.title }}</h3>
            <span class="text-sm">{{ order.formattedPlacementTime }} - {{ order.formattedTime }} ({{ order.remainingTime
                }})</span>
            <p class="text-gray-600">{{ order.description }}</p>
        </button>
    </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { parseISO, differenceInMinutes, formatDistanceToNowStrict, format } from 'date-fns';
import { useRoute } from 'vue-router';

definePageMeta({
    layout: "display",
});

const triggerUpdate = ref(0);
const route = useRoute();
const kitchenId = route.params.id;
const orders = ref([
    { id: 1, title: "Order 1", placementTime: "2024-03-16T01:20:00", time: "2024-03-16T01:22:00", description: "Order 1 description", remainingTime: '', formattedPlacementTime: '', formattedTime: '' },
    { id: 2, title: "Order 2", placementTime: "2024-03-16T01:20:00", time: "2024-03-16T01:24:00", description: "Order 2 description", remainingTime: '', formattedPlacementTime: '', formattedTime: '' },
]);

const formatTime = (isoString) => format(parseISO(isoString), 'hh:mm a');

const calculateStatusAndUpdateFormatting = (order) => {
    if (!order.placementTime || !order.time) {
        console.error('Отсутствует placementTime или time', order);
        return { remainingTime: '', percentageElapsed: 0 };
    }

    const now = new Date();
    const placementTime = parseISO(order.placementTime);
    const pickupTime = parseISO(order.time);

    const totalTime = differenceInMinutes(pickupTime, placementTime);
    const elapsedTime = differenceInMinutes(now, placementTime);
    const percentageElapsed = (elapsedTime / totalTime) * 100;

    order.formattedPlacementTime = formatTime(order.placementTime);
    order.formattedTime = formatTime(order.time);
    order.remainingTime = formatDistanceToNowStrict(pickupTime, { addSuffix: true });

    return { remainingTime: order.remainingTime, percentageElapsed };
};


const timeStyle = (order) => {
    const { percentageElapsed } = calculateStatusAndUpdateFormatting(order);

    let backgroundColor;
    if (percentageElapsed <= 65) {
        backgroundColor = '#38a169'; // Green
    } else if (percentageElapsed <= 90) {
        backgroundColor = '#ed8936'; // Orange
    } else {
        backgroundColor = '#e53e3e'; // Red
    }

    return { backgroundColor };
};

const update = () => {
    orders.value.forEach(order => {
        const now = new Date();
        // Это просто обновляет каждый заказ, не изменяя его содержимое,
        // но заставляет Vue переоценить реактивность и выполнить watchEffect
        order.lastCheck = now;
    });
};
let intervalId;

onMounted(() => {
    intervalId = setInterval(() => {
        triggerUpdate.value++; // Просто увеличиваем значение для триггера обновления
        console.log(triggerUpdate.value)
    }, 60000); // Обновляем каждую минуту
});


onUnmounted(() => {
    clearInterval(intervalId); // Очищаем при размонтировании
});

watchEffect(() => {
    orders.value.forEach(order => {
        // Теперь используем triggerUpdate внутри watchEffect, чтобы Vue явно отслеживал его изменения
        const _ = triggerUpdate.value; // Просто читаем, чтобы Vue уловил зависимость
        order.style = timeStyle(calculateStatusAndUpdateFormatting(order));
    });
});
</script>

<style>
.timeStyle {
    cursor: pointer;
}
</style>