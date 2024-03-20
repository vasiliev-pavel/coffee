<template>
  <div class="size-selector">
    <div
      v-for="(size, index) in props.sizes"
      :key="size.label"
      :class="{
        'size-option': true,
        selected: selectedSize.label === size.label,
      }"
      @click="selectSize(index)"
    >
      <div
        class="size-content"
        :class="{ 'is-selected': selectedSize.label === size.label }"
      >
        <span class="size-label">{{ size.label }}</span>
        <span class="size-volume" v-if="selectedSize.label === size.label">{{
          size.volume
        }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from "vue";

const props = defineProps({
  sizes: {
    type: Array,
    default: () => [
      { label: "S", volume: "8oz", price: 0.0 },
      { label: "M", volume: "12oz", price: 0.5 },
      { label: "L", volume: "16oz", price: 0.95 },
    ],
  },
});

const orderDetails = useOrderStore();
const selectedSize = computed(
  () => props.sizes[orderDetails.selectedSizeIndex]
);

onMounted(() => {
  // Проверка, есть ли уже выбранный размер в хранилище, и если нет, то выбираем первый размер
  if (orderDetails.selectedSize === null) {
    selectSize(0);
  } else {
    // Эта часть кода гарантирует, что при повторном монтировании компонента выбранный размер будет отражать текущее состояние в `orderDetails`
    const sizeIndex = props.sizes.findIndex(
      (size) => size.label === orderDetails.selectedSize.label
    );
    if (sizeIndex !== -1) {
      selectSize(sizeIndex);
    }
  }
});

const selectSize = (index) => {
  orderDetails.setIndex(index);
  orderDetails.setSelectSize(props.sizes[index]);
};
</script>

<style scoped>
.size-label {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1;
}

.size-volume {
  font-weight: 500;
  font-size: 0.8rem;
}
.size-selector {
  display: inline-flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 9999px;
}

.size-option {
  position: relative;
  width: 3rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out;
  margin: 0 0.3rem;
}

.size-option.selected {
  z-index: 1;
}

.size-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.1s ease-in-out;
}

.size-content.is-selected {
  background-color: rgb(59 130 246);
  color: #f0f0f0;
  padding: 0.75rem;
  width: 3.35rem;
  height: 3.35rem;
  border-radius: 9999px;
  transform: translate(-50%, -50%) scale(1.2);
}

.size-option:not(.selected) .size-content {
  transition: transform 0.1s ease-in-out;
}

.font-bold {
  transition: color 0.3s ease-in-out;
}

.font-medium {
  transition: color 0.3s ease-in-out;
}

/* Мобильные телефоны и маленькие устройства (меньше 640px) */
@media (max-width: 639px) {
  .size-label {
    font-size: 0.875rem; /* Уменьшаем размер шрифта */
  }

  .size-volume {
    font-size: 0.675rem; /* Уменьшаем размер шрифта */
  }

  .size-selector {
    border-radius: 50px; /* Незначительно уменьшаем скругление */
  }

  .size-option {
    width: 2.5rem;
    height: 2.8rem; /* Уменьшаем размер опций */
  }
}

/* Планшеты и средние устройства (от 640px до 1023px) */
@media (min-width: 640px) and (max-width: 1024px) {
  .size-label {
    font-size: 1rem; /* Незначительно уменьшаем размер шрифта */
  }

  .size-volume {
    font-size: 0.6875rem; /* Незначительно уменьшаем размер шрифта */
  }

  .size-option {
    width: 2.75rem;
    height: 3.25rem; /* Незначительное уменьшение размера */
  }
}

/* Ноутбуки и средние экраны (от 1024px до 1439px) */
@media (min-width: 1024px) and (max-width: 1439px) {
  .size-label {
    font-size: 1.05rem; /* Слегка увеличиваем размер шрифта */
  }

  .size-volume {
    font-size: 0.725rem; /* Слегка увеличиваем размер шрифта */
  }

  .size-option {
    width: 2.9rem;
    height: 3.4rem; /* Слегка увеличиваем размер */
  }
}
</style>
