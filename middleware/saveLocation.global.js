export default defineNuxtRouteMiddleware((to, from) => {
    const userStore = useUserStore(); // Используем Pinia store

    // Проверка наличия якоря в URL
    if (from.hash) {
        userStore.addpath(from.hash)
      // Здесь можно сохранить информацию о якоре в глобальное состояние приложения
      // Например, используя Pinia или другой способ глобального состояния
      // setAnchor(from.hash);
    }
  });
  