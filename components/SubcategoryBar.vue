<template>
    <div class="subcategories-bar grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6" v-if="visible">
        <div v-for="subCategory in subCategories" :key="subCategory" class="sub-category rounded"
            @click="selectSubCategory(currentCategory, subCategory)">
            {{ subCategory }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        subCategories: Array,
        visible: Boolean,
        currentCategory: String,
    },
    methods: {
        selectSubCategory(categoryName, subCategory) {
            this.$emit('update:category', { categoryName, subCategory });
        },
    },
};
</script>

<style>
.subcategories-bar {
    transition: 0.5s all;

}

.sub-category {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    cursor: pointer;

}
</style>