<template>
    <h1>Menu #{{ menuId }}:</h1>
</template>
<script setup>
definePageMeta({
    layout: "display",
});
const route = useRoute();
const menuId = route.params.id; 
</script>