<template>
    <div class="video-bar rounded-lg">

        <template v-if="item.videoSrc">
            <div class="relative w-full h-full min-h-[50vh]">
                <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover "
                    :src="item.videoSrc" :alt="item.name"></video>
                <div class="video-info absolute bottom-0 p-6 bg-black bg-opacity-50 w-full">
                    <h3 class="text-white">{{ item.name }}</h3>
                    <p class="text-white">${{ item.price }}</p>
                </div>
            </div>
        </template>

        <template v-else>
            <div class="flex flex-col p-6">
                <img :src="item.photo" :alt="item.name" class="w-full h-auto" />
                <h3>{{ item.name }}</h3>
                <p>${{ item.price }}</p>
            </div>
        </template>

    </div>
</template>
<script setup>
const props = defineProps({
    item: Object,
});
</script>
<style>
.video-bar {
    display: grid;
    grid-column: span 2;
    overflow: hidden;
}
</style>