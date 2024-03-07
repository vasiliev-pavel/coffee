<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div class="video-container relative w-full h-full min-h-[50vh]">
            <img :src="item.photo" :alt="item.name" class="absolute top-0 left-0 w-full h-full object-cover" />
            <div class="video-info absolute bottom-0 p-6 bg-black bg-opacity-50 w-full">
                <h3 class="text-white">{{ item.name }}</h3>
                <p class="text-white">${{ item.price }}</p>
            </div>
        </div>
        <div class="extra-container">
            <SubcategoryBar v-if="currentCategory" :subCategories="currentSubcategories"
                :visible="isSubcategoriesVisible" :currentCategory="currentCategory.name"
                @update:category="updateCategory" />
            <div class="extra-bar" ref="extraBar">
                <div v-for="category in categories" :key="category.name" @click="centerCategory($event, category.name)"
                    :class="{
                'is-active': category.isActive,
                'is-inactive': !category.isActive,
            }">{{ category.name }}</div>
            </div>
        </div>


    </div>
</template>

<script>
import { ref } from "vue";
import { extras as mockCategories } from "~/mock.ts";
import SubcategoryBar from '~/components/SubcategoryBar.vue'

export default {
    components: { SubcategoryBar },
    props: ['item'],
    setup() {
        const categories = ref(mockCategories.map(category => ({
            ...category,
            selectedSubcategories: []
        })));
        const extraBar = ref(null);
        const isSubcategoriesVisible = ref(false);
        const currentSubcategories = ref([]);
        const currentCategory = ref(null);

        const centerCategory = (event, categoryName) => {
            const category = categories.value.find(c => c.name === categoryName);
            currentCategory.value = category;
            if (category) {
                currentSubcategories.value = category.subCategories || [];
                isSubcategoriesVisible.value = !!currentSubcategories.value.length;
            } else {
                isSubcategoriesVisible.value = false;
            }
        };

        const updateCategory = ({ categoryName, subCategory }) => {
            const category = categories.value.find(c => c.name === categoryName);
            if (category) {
                const index = category.selectedSubcategories.findIndex(sub => sub === subCategory);
                if (index === -1) {
                    category.selectedSubcategories.push(subCategory);
                } else {
                    // Если подкатегория уже выбрана, возможно, вы хотите ее удалить или обновить логику по-другому
                    category.selectedSubcategories.splice(index, 1);
                }
            }
            // Можно скрыть подкатегории после выбора, если это требуется логикой приложения
            // isSubcategoriesVisible.value = false;
        };

        return { categories, extraBar, isSubcategoriesVisible, currentSubcategories, centerCategory, updateCategory, currentCategory };
    }
};
</script>


<style>
.extra-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.extra-bar {
    transition: 0.5s all;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow-x: auto;
    white-space: nowrap;
    padding: 15px 0;
    -ms-overflow-style: none;
    /* IE и Edge */
    scrollbar-width: none;
    /* Firefox */
}

.extra-bar::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari и Opera */
}

.extra-bar>div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    padding: 0 20px;
    flex-grow: 1;
    text-align: center;
    transition: 0.5s all;
}

.extra-bar>div.is-active {
    font-weight: bold;
    color: black;
}

.extra-bar>div.is-inactive {
    color: #a5a5a5;
}
</style>
