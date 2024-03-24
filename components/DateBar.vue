<template>
    <div class="date-navigation">
        <button @click="navigate(-1)">←</button>
        <button @click="openCalendar">{{ formattedDate }}</button>
        <button @click="navigate(1)">→</button>
    </div>
</template>

<script setup>

const selectedDate = ref(new Date());

const navigate = (direction) => {
    selectedDate.value = new Date(
        selectedDate.value.getFullYear(),
        selectedDate.value.getMonth(),
        selectedDate.value.getDate() + direction
    );
};

const openCalendar = () => {
    // Logic to open a calendar UI. This might depend on the UI library you're using.
    console.log('Calendar opened'); // Placeholder logic
};

const formattedDate = computed(() => {
    return selectedDate.value.toLocaleDateString(undefined, {
        day: 'numeric', month: 'long', year: 'numeric'
    });
});
</script>

<style>
.date-navigation {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    background-color: #fff;
    color: #0a246b;
    border-radius: 0.25rem;
    font-weight: bold;

    &>button {
        padding: 15px;
    }
}
</style>