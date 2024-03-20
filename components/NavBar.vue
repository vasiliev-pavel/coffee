<template>
  <nav class="nav-bar flex sticky top-2 left-0 right-0 z-40 rounded">
    <NuxtLink to="/"> Magnifico Coffee </NuxtLink>
    <a href="#" @click="handleProfileNavigation">Profile</a>
  </nav>
  <LoginPopup
    :isOpen="isLoginPopupOpen"
    @update:isOpen="isLoginPopupOpen = $event"
  />
</template>

<script setup>
import LoginPopup from "~/components/LoginPopup.vue";

const user = useSupabaseUser();
const router = useRouter();
const isLoginPopupOpen = ref(false);

// Функция для управления навигацией
const handleProfileNavigation = (event) => {
  event.preventDefault(); // Предотвратить стандартное действие ссылки
  if (!user.value) {
    isLoginPopupOpen.value = !isLoginPopupOpen.value;
  } else {
    router.push("/profile"); // Перенаправить на страницу профиля, если пользователь вошел в систему
  }
};
</script>

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
