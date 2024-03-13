<template>
  <div class="grid-container">
    <div
      v-for="subCategory in currentCategory.subCategories"
      :key="subCategory.name"
      class="sub-category"
      @click="selectSubCategory(subCategory.name)"
    >
      <CupIcon class="sub-category-svg" />
      <div class="item-name">{{ subCategory.name }}</div>

      <div class="quantity-control" v-if="currentCategory.showQuantity">
        <div class="quantity-button">
          <MinusIcon class="minus-button" />
        </div>

        <span class="quantity-text">1</span>

        <div class="quantity-button">
          <PlusIcon class="plus-button" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CupIcon from "~/components/icons/CupIcon.vue";
import MinusIcon from "~/components/icons/MinusIcon.vue";
import PlusIcon from "~/components/icons/PlusIcon.vue";

export default {
  props: {
    currentCategory: Object,
  },
  components: {
    CupIcon,
    MinusIcon,
    PlusIcon,
  },
  methods: {
    selectSubCategory(categoryName) {
      console.log(categoryName);
      // this.$emit("update:category", { categoryName, subCategory });
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.sub-category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: #fff;
  border-radius: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  width: 10rem;
  height: 14rem;
  transition: 0.3s all;
  box-sizing: border-box;
}

.sub-category:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.sub-category-svg {
  height: 7rem;
}

.item-name {
  text-align: center;
  font-size: 1rem; /* Остается без изменений */
  font-weight: 600;
  color: #333;
  margin: 0.5rem 0; /* Изменено с 8px */
  max-height: 3rem; /* Остается без изменений */
  display: flex;
  align-items: center;
  justify-content: center;
}
.quantity-text {
  font-size: 1rem; /* Остается без изменений */
  font-weight: 600;
}
.quantity-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%; /* Остается без изменений */
  margin-top: 0.5rem; /* Изменено с 8px */
}

.quantity-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.75rem; /* Изменено с 28px */
  height: 1.75rem; /* Изменено с 28px */
  background-color: #98cdfe;
  border-radius: 9999px;
  padding: 0.3125rem; /* 5px = 0.3125rem */
}

.minus-button,
.plus-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
