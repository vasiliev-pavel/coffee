<template>
    <header>
        <NuxtLink to="/display" class="rounded-full p-4 bg-white" />
    </header>
    <main class="container mx-auto text-white display">
        <slot />
    </main>
</template>

<style>
html {
    background-color: #0a246b;
}
</style>