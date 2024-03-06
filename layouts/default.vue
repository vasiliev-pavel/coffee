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
  background-color: #e8e8e8;
  scroll-behavior: smooth;
}
</style>
