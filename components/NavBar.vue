<template>
  <nav class="nav-bar flex sticky top-2 left-0 right-0 z-40 rounded">
    <NuxtLink to="/"> Magnifico Coffee </NuxtLink>
    <NuxtLink to="/profile"> Profile </NuxtLink>
  </nav>
</template>

<style>
.nav-bar {
  justify-content: space-between;
  transition: 0.5s all;

  & > a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: bold;
    padding: 15px 0;
  }
}
</style>
