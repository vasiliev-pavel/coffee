<template>
    <div class="card-bar grid grid-cols-5 gap-4">
        <CardBarVideoBar class=" min-h-[85vh] max-h-[85vh]" :item="item" />
        <CardBarSelectBar class="min-h-[85vh] max-h-[85vh]" :item="item" />
    </div>
</template>
<script setup>
const props = defineProps({
    item: Object,
});
</script>
<style>
@media (max-width: 768px) {
    .card-bar {
        display: flex;
        flex-direction: column;
    }
}
</style>