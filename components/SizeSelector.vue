<template>
  <div class="size-selector">
    <div
      v-for="size in sizes"
      :key="size.label"
      :class="{
        'size-option': true,
        selected: selectedSize.label === size.label,
      }"
      @click="selectSize(size)"
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

<script>
export default {
  name: "SizeSelector",
  props: {
    sizes: {
      type: Array,
      default: () => [
        { label: "S", volume: "250ml" },
        { label: "M", volume: "500ml" },
        { label: "L", volume: "750ml" },
      ],
    },
  },
  data() {
    return {
      selectedSize: this.sizes[1], // По умолчанию второй элемент
    };
  },
  methods: {
    selectSize(size) {
      this.selectedSize = size;
      this.$emit("update:selectedSize", size); // Отправляем событие с выбранным размером
    },
  },
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
  font-size: 0.75rem;
}
.size-selector {
  display: inline-flex;
  align-items: center;
  background-color: #f0f0f0;
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
  transition: background-color 0.3s ease-in-out;
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
  transition: transform 0.3s ease-in-out;
}

.size-content.is-selected {
  background-color: rgb(59 130 246);
  color: #f0f0f0;
  padding: 0.8rem;
  border-radius: 9999px;
  transform: translate(-50%, -50%) scale(1.2);
}

.size-option:not(.selected) .size-content {
  transition: transform 0.3s ease-in-out;
}

.font-bold {
  transition: color 0.3s ease-in-out;
}

.font-medium {
  transition: color 0.3s ease-in-out;
} /* Мобильные телефоны и маленькие устройства (меньше 640px) */
@media (max-width: 639px) {
  .size-label {
    font-size: 0.875rem; /* Уменьшаем размер шрифта */
  }

  .size-volume {
    font-size: 0.625rem; /* Уменьшаем размер шрифта */
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