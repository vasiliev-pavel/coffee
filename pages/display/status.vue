<template>
    <div class="flex w-full h-screen justify-center items-center">
        <div class="flex flex-col w-1/2">
            <h2 class="text-7xl font-bold mb-6 p-4">Готовятся</h2>
            <div v-for="order in preparingOrders" :key="order.id" class="flex items-center p-4 text-5xl">
                <span class="rounded bg-[#009FFF] py-2 px-6">{{ order.number }}</span>
                <span class="text-[#98BFF5] p-2">{{ order.name }}</span>
            </div>
        </div>
        <div class="flex flex-col">
            <h2 class="text-7xl font-bold mb-6 p-4">Готовы</h2>
            <div v-for="order in readyOrders" :key="order.id" class="flex items-center p-4 text-5xl">
                <span class="rounded bg-[#009FFF] py-2 px-6">{{ order.number }}</span>
                <span class=" p-2">{{ order.name }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            preparingOrders: [
                { id: 1, number: 42, name: 'Сударушка' },
                { id: 2, number: 44, name: 'Дмитрий' },
                { id: 3, number: 45, name: 'Даня' },
                { id: 4, number: 46, name: 'Мария' },
                { id: 5, number: 47, name: 'Дарима' },
            ],
            readyOrders: [
                { id: 1, number: 33, name: 'Юлия' },
                { id: 1, number: 34, name: 'Дмитрий' },
                { id: 1, number: 35, name: 'вика' },
                { id: 1, number: 36, name: 'Лика' },
                { id: 1, number: 37, name: 'Александр' },

            ]
        }
    }
}
</script>