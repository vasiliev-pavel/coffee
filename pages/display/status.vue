<template>
    <div class="status-display">
        <div class="status-side">
            <h2>Preparing</h2>
            <div v-for="order in preparingOrders" :key="order.id" class="status-item">
                <span class="status-id">{{ order.number }}</span>
                <span class="status-name">{{ order.name }}</span>
            </div>
        </div>
        <div class="status-side">
            <h2>Ready</h2>
            <div v-for="order in readyOrders" :key="order.id" class="status-item">
                <span class="status-id">{{ order.number }}</span>
                <span class="status-name">{{ order.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            preparingOrders: [
                { id: 1, number: 42, name: 'Genevra' },
                { id: 2, number: 44, name: 'Alexey' },
                { id: 3, number: 45, name: 'Abraham' },
                { id: 4, number: 46, name: 'Maria' },
                { id: 5, number: 47, name: 'Jose' },
            ],
            readyOrders: [
                { id: 1, number: 33, name: 'Julia' },
                { id: 1, number: 34, name: 'John' },
                { id: 1, number: 35, name: 'Bill' },
                { id: 1, number: 36, name: 'Ammie' },
                { id: 1, number: 37, name: 'Anastasia' },

            ]
        }
    }
}
</script>
<script setup>
definePageMeta({
    layout: "display",
});
</script>

<style>
.status-display {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    height: 95vh;
    overflow: hidden;
}

.status-side {
    display: grid;
    grid-column: span 1;
    gap: 1.5rem;
    margin-left: 10rem;

    &>h2 {
        font-weight: bold;
        font-size: 3rem;
    }
}

.status-item {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    align-items: center;
    gap: 0.2rem;
    font-size: 2rem;
    font-weight: bold;
}

.status-id {
    display: grid;
    text-align: center;
    padding: 1.5rem 0.5rem;
    border-radius: 0.25rem;
    background-color: rgb(0 159 255);
    grid-column: span 1;
}

.status-name {
    display: grid;
    padding-left: 20px;
    grid-column: span 4;
}
</style>