<template>
    <header class="container mx-auto">
        <NavBar />
    </header>
    <main class="container mx-auto">
        <slot />
    </main>
</template>

<style>
html {
    background-color: #E8E8E8;
}

main {
    height: 300vh;
}
</style>