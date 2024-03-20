<template>
    <div class="panel-bar flex md:sticky md:top-2 lg:sticky lg:top-2 left-0 right-0 z-50 mt-5 md:rounded lg:rounded fixed bottom-0 top-auto text-xl"
        ref="panelBar">
        <NuxtLink v-for="panel in panels" :key="panel.path" :to="panel.path" :class="{
            'is-active': panel.isActive,
            'is-inactive': !panel.isActive,
        }">{{ panel.name }}</NuxtLink>
    </div>
</template>

<script setup>
import { ref } from "vue";

const mockpanels = [
    { name: "⌂ Home", path: '/panel', isActive: false, svgPath: "" },
    { name: "𐚤 Menu", path: '/panel/menu', isActive: false, svgPath: "" },
    { name: "Payments", path: '/panel/payments', isActive: false, svgPath: "" },
    { name: "⚙ Settings", path: '/panel/settings', isActive: false, svgPath: "" },
];


const panels = ref(mockpanels);
const panelBar = ref(null);
const route = useRoute();


const updateActivePanel = () => {
    panels.value.forEach(panel => {
        panel.isActive = route.path === panel.path;
    });
};

// Немедленно обновляем активную панель при монтировании
updateActivePanel();

// Наблюдаем за изменениями в маршруте
watch(() => route.path, () => {
    updateActivePanel();
});
</script>

<style>
.panel-bar {
    background-color: #2d2d2d;
    transition: 0.5s all;
    display: flex;
    justify-content: space-between;
    overflow-x: auto;
    white-space: nowrap;
    padding: 15px 0;
    -ms-overflow-style: none;
    /* IE и Edge */
    scrollbar-width: none;
    /* Firefox */
}

.panel-bar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari и Opera */
}

.panel-bar>a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    padding: 0 20px;
    flex-grow: 1;
    text-align: center;
}

.panel-bar>a.is-active {
    font-weight: bold;
    color: #ffffff;
}

.panel-bar>a.is-inactive {
    color: #c5c5c5;
}
</style>