<template>
    <h1>Menu Choice:</h1>
    <div class="display-list">
        <NuxtLink v-for="menu in menus" :key="menu.id" :to="`/display/menu/${menu.id}`" class="display-item">
            {{ menu.name }}
        </NuxtLink>
    </div>
</template>

<script setup>
import { menus } from "~/mock.ts";

definePageMeta({
    layout: "display",
});
</script>
