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
    { name: "Home", path: '/panel', isActive: false, svgPath: "" },
    { name: "Reports", path: '/panel/reports', isActive: false, svgPath: "" },
    { name: "Menu", path: '/panel/menu', isActive: false, svgPath: "" },
    { name: "Payments", path: '/panel/payments', isActive: false, svgPath: "" },
    { name: "Tools", path: '/panel/tools', isActive: false, svgPath: "" },
];


const panels = ref(mockpanels);

const panelBar = ref(null);
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
    color: #a5a5a5;
}
</style>