<template>
    <div class="category-bar flex sticky top-2 left-0 right-0 z-50 rounded">
        <NuxtLink :to="{ path: '/', hash: '#hot_chocolate' }">Hot Chocolate</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#hot_coffee' }">Hot Coffee</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#cold_coffee' }">Cold Coffee</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#tea' }">Tea</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#snacks' }">Snacks</NuxtLink>
        <NuxtLink :to="{ path: '/', hash: '#backery' }">Backery</NuxtLink>
    </div>
</template>

<style>
.category-bar {
    background-color: #2D2D2D;
    transition: 0.5s all;


    &>a {
        display: flex;
        justify-content: center;

        color: #fff;
        font-weight: bold;
        overflow-x: auto;
        padding: 15px 20px;
        width: 100%;
    }
}
</style>