<template>
  <div class="grid-container">
    <div
      v-for="subCategory in currentCategory.subCategories"
      :key="subCategory.name"
      class="sub-category p-5 rounded-2xl"
      @click="selectSubCategory(subCategory.name)"
    >
      <CupIcon class="sub-category-svg" />
      <div class="item-name text-sm font-semibold">
        {{ subCategory.name }}
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
    },
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
}

.sub-category {
  width: 6rem;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s all;
}

.sub-category:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.sub-category-svg {
  height: 5rem;
}

.item-name {
  min-height: 3.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

@media (max-width: 320px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
