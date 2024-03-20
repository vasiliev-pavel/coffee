<template>
    <header class="container mx-auto px-4">
        <PanelNavBar />
    </header>
    <main class="container mx-auto text-white">
        <slot />
    </main>
</template>

<style>
html {
    background-color: #000;
}
</style>