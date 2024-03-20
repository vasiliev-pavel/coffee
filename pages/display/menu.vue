<template>
    <h1 class="label-menu">{{ currentCategoryName }} {{ countdown }}</h1>
    <div class="display-menu gap-10">
        <div class="display-element rounded-lg" v-for="item in  currentCategory " :key="item.id">
            <div class="display-element-media">
                <video autoplay muted loop playsinline class="w-full h-full object-cover" :src="`/` + item.videoSrc"
                    :alt="item.name" />
            </div>
            <div class="display-element-badge">
                <h2>{{ item.name }}</h2>
                <p>${{ item.price }}</p>
            </div>
        </div>
    </div>
</template>


<script setup>
definePageMeta({
    layout: "display",
});

import { data } from "~/mock.ts";


const selectRandomItems = (items, count) => {
    if (items.length <= count) {
        return items;
    }
    const shuffled = items.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};

const currentCategory = ref([]);
const currentCategoryName = ref("");

const updateTimer = () => {
    countdown.value = 60; // Сброс таймера обратно до 60 секунд при каждом обновлении категории
    const timer = setInterval(() => {
        countdown.value -= 1;
        if (countdown.value === 0) {
            clearInterval(timer); // Очистить таймер, когда он достигнет 0
        }
    }, 1000); // Уменьшать значение на 1 каждую секунду
};

const updateCategoryItems = () => {
    const categories = Object.keys(data);
    const randomCategoryIndex = Math.floor(Math.random() * categories.length);
    const categoryName = categories[randomCategoryIndex];
    const formattedCategoryName = categoryName
        .replace(/_/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    const items = data[categoryName];
    currentCategory.value = selectRandomItems(items, 4);
    currentCategoryName.value = formattedCategoryName;

    updateTimer(); // Обновлять таймер каждый раз при смене категории
};


let intervalId;
const countdown = ref(60);

onMounted(() => {
    updateCategoryItems(); // Начальное обновление и запуск таймера
    intervalId = setInterval(updateCategoryItems, 60000); // 60000ms = 60 секунд
});

onUnmounted(() => {
    clearInterval(intervalId);
});
</script>


<style>
.label-menu {
    position: fixed;
    left: 0%;
    top: 10%;
    white-space: nowrap;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
}

.display-menu {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    transition: 0.5s all;
    height: 97vh;
    overflow: hidden;
    margin-top: -10px;
}

.display-element {
    display: grid;
    border-radius: 1.5rem;
    overflow: hidden;
    grid-column: span 1;
    grid-row: span 1;
    transition: 0.5s all;
    position: relative;
}

.display-element-media {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
}

.display-element-badge {
    display: flex;
    flex-direction: row;
    font-weight: bold;
    align-items: flex-end;
    justify-content: space-between;
    padding: 2rem;
    font-size: 3rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.25);
}
</style>