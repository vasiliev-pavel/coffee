<template>
    <header>
        <NuxtLink to="/panel" class="rounded-full p-4 bg-white" />
    </header>
    <main class="container mx-auto px-4 text-white panel">
        <slot />
    </main>
</template>

<style>
html {
    background-color: #0a246b;
}
</style>