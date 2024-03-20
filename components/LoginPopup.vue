<template>
  <transition name="modal">
    <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 overflow-y-auto h-full w-full z-20"
      @click="startClosing">
      <div class="login-container" @click.stop>
        <div class="branding-container" v-show="isOpen">
          <h1 class="branding-title leading-none font-medium">
            Magnifico<br />Coffee
          </h1>
        </div>
        <div class="login-block">
          <div class="title text-[2rem] mb-4 font-medium">Continue with</div>
          <div class="button-container">
            <button class="login-btn google active:scale-95 transition duration-150 ease-in-out"
              @click="signInWithGoogle">
              <GoogleIcon />
            </button>
            <button class="login-btn apple active:scale-95 transition duration-150 ease-in-out">
              <AppleIcon />
            </button>
            <button @click="startClosing" class="no-account active:scale-95 transition duration-150 ease-in-out">
              Continue without login
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import GoogleIcon from "~/components/icons/GoogleIcon.vue";
import AppleIcon from "~/components/icons/AppleIcon.vue";
import ArrowIcon from "~/components/icons/ArrowIcon.vue";

const props = defineProps({
  isOpen: Boolean,
});

const supabase = useSupabaseClient();
const emit = defineEmits(["update:isOpen"]);

const startClosing = () => {
  // Проигрывание анимации закрытия
  emit("update:isOpen", false);
};

const signInWithGoogle = async () => {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}/`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  if (error) console.log(error);
};
</script>

<style>
.branding-container {
  display: none;
  /* Скрыт по умолчанию */
}

.login-container {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e4e4e4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 30;
}

.title {
  align-self: flex-start;
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.login-btn {
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  border: none;
  width: 54px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn.google,
.login-btn.apple,
.no-account {
  background-color: #fff;
  color: #000;
  min-height: 54px;
}

.no-account {
  display: flex;
  line-height: 1em;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  width: 160px;
  padding: 8px 10px;
  align-items: center;
  border-radius: 0.8rem;
}

.login-btn.no-account:hover {
  background-color: #d1d1d1;
}

/* Медиа-запросы для адаптации под мобильные устройства */
@media (max-width: 768px) {
  .modal {
    height: 33%;
    /* Занимает одну треть экрана на мобильных устройствах */
    bottom: 0;
    /* Позиционирование снизу */
  }
}

@media (min-width: 700px) {
  .login-container {
    display: flex;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    max-width: 430px;
    /* Максимальная ширина контейнера */
    height: auto;
    /* Высота по содержимому */
    animation: none !important;
    /* Отключаем анимацию для .login-container */
    border-radius: 1rem;
    /* Скругление углов */
    padding: 0;
  }

  .branding-container {
    display: flex;
    align-items: center;
    /* Выравнивание по вертикали */
    justify-content: flex-start;
    /* Выравнивание по горизонтали */
    padding-left: 2rem;
    /* Отступ слева */
    background-color: #4a90e2;
    width: 100%;
    height: 50%;
    z-index: 31;
    /* Выше фона, но ниже кнопок входа */
    border-top-left-radius: 1rem;
    border-top-right-radius: 1rem;
    border-bottom: 4px solid #ffffff;
  }

  .login-block {
    flex: 1;
    /* Блок растянется на всю доступную высоту */
    width: 100%;
    /* Ширина равна ширине родителя */
    display: flex;
    flex-direction: column;
    /* Направление основной оси */
    justify-content: center;
    /* Выравнивание содержимого по центру */
    text-align: center;
    /* Выравнивание текста по центру */
  }

  .branding-title {
    color: #ffffff;
    font-size: 2rem;
    /* Вы можете настроить размер шрифта по своему усмотрению */
  }

  .title {
    font-size: 1.8rem;
    padding-left: 2rem;
  }

  .button-container {
    padding-left: 2rem;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0);
  }
}

@keyframes slideDown {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100%);
  }
}

/* Анимации только для модального окна, без сдвига тени */
.login-container {
  /* ваш текущий CSS для .login-container */
  animation: slideUp 0.3s ease-out;
  /* Только для появления */
}

/* Анимация исчезновения для модального окна */
.modal-leave-active .login-container {
  animation: slideDown 0.3s ease-in forwards;
}

/* Анимации для тени: появление и исчезновение */
.fixed.inset-0 {
  transition: opacity 0.3s ease-in-out;
}

/* Исчезновение тени */
.modal-leave-active {
  opacity: 0;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Анимация для активных состояний перехода тени */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
