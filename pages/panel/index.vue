<template>
    <div class="grid grid-cols-4 grid-rows-2 gap-4 w-full my-10">
        <div v-for="order in orders" :key="order.id"
            class="bg-[#183854] flex flex-col items-start rounded order p-6 min-h-80">
            <h3 class="text-xl font-bold">{{ order.title }}</h3>
            <span class="text-sm">{{ order.time }}</span>
            <p class="text-gray-600">{{ order.description }}</p>
            <button class="">Готово</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [
                { id: 1, title: '143-1', description: 'Г.Латте', time: '0.3' },
                { id: 2, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 3, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 4, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 5, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 6, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 7, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },
                { id: 8, title: '144-1', description: 'Сырники', time: '0.4' },

            ]
        }
    }
}
</script>