<template>
    <h1>Categories</h1>
    <div class="panel-menu gap-10">
        <NuxtLink :to="`/panel/menu/items/${category.name}`" v-for="category
     in categories" :key="category.name">{{ category.name }}</NuxtLink>
    </div>
</template>

<script setup>

import { categories } from '~/mock.ts';

const categoriesList = ref(categories);

definePageMeta({
    layout: "panel",
});
</script>
