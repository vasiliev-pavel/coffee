<template>
    <h1>Kitchen Choice:</h1>
    <div class="display-list">
        <NuxtLink v-for="kitchen in kitchens" :key="kitchen.id" :to="`/display/kitchen/${kitchen.id}`"
            class="display-item">
            {{ kitchen.name }}
        </NuxtLink>
    </div>
</template>

<script setup>
import { kitchens } from "~/mock.ts";

definePageMeta({
    layout: "display",
});
</script>
