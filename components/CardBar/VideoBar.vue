<template>
    <div class="video-bar rounded-lg relative w-full h-full">
        <video v-if="item.videoSrc" autoplay muted loop playsinline
            class="absolute top-0 left-0 w-full h-full object-cover" :alt="item.name">
            <source :src="item.videoSrc" type="video/mp4">
        </video>
        <img v-if="!item.videoSrc" :src="item.photo" :alt="item.name" class="w-full h-auto" />
        <div class="video-description-bar">
            <h3>{{ item.name }}</h3>
            <button @click="addToCart">Add ${{ item.price }}</button>
        </div>
    </div>
</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    item: Object,
});

const cartStore = useCartStore();

const addToCart = () => {
    cartStore.addItem(props.item.id, props.item.price, 1, props.item.size, {});
};
</script>
<style>
.video-bar {
    display: grid;
    grid-column: span 2;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);

    &>.video-description-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.25);
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 20%;
        z-index: 5;
    }
}

@media (max-width: 768px) {
    .video-bar {
        min-height: 40vh !important;
        max-height: 40vh !important;
    }
}
</style>