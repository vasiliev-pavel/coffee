<template>
  <header class="container mx-auto px-4 sm:px-6 md:px-8">
    <NavBar />
  </header>
  <main class="container mx-auto px-4 sm:px-6 md:px-8">
    <slot />
    <ButtonCart />
  </main>
</template>
<script setup>
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
  background-color: #f3f4f6;
  scroll-behavior: smooth;
}
</style>
