<template>
    <h1>Display Choice:</h1>
    <NuxtLink to="/display/menu">
        Digital Menu
    </NuxtLink>
    <NuxtLink to="/display/status">
        Order Status
    </NuxtLink>
    <NuxtLink to="/display/kitchen">
        Kitchen Display
    </NuxtLink>
</template>
<script setup>
definePageMeta({
    layout: "display",
});
</script>


<style>
.display h1 {
    font-size: 4rem;
    color: #fff;
    font-weight: bold;
}

.display a {
    display: flex;
    padding: 10px;
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
}

.display-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
    transition: 0.5s all;
    gap: 1.5rem;
}

.display-item {
    display: grid;
    border: 1px solid #fff;
    border-radius: 0.25rem;
    transition: 0.5s all;
    grid-column: span 1;
    grid-row: span 1;
}
</style>