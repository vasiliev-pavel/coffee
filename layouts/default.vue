<template>
  <header class="container mx-auto px-4">
    <NavBar />
  </header>
  <main class="container mx-auto px-4">
    <slot />
    <ButtonCart />
  </main>
</template>
<script setup lang="ts">
useHead({
  meta: [
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    },
  ],
});
</script>

<style>
html {
  /* background-color: #e8e8e8;*/
  background-color: #e8e8e8;
  scroll-behavior: smooth;
}
</style>
