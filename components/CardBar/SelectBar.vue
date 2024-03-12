<template>
    <div class="select-bar rounded-lg grid-rows-5 gap-6">
        <div class="select-category-bar" :class="{ 'is-visible': isExtraContainerVisible }">
            <div class="select-inner-bar gap-6">
                <div v-for="subCategory in categories" :key="subCategory.name">
                    <span>{{ subCategory.name }}</span>
                </div>
            </div>
        </div>
        <div class="select-items-bar">
            <div></div>
        </div>
    </div>
</template>
<script setup>
import { ref } from "vue";
import { extras as mockCategories } from "~/mock.ts";
import {
    startDragging,
    stopDragging,
    handleDragging,
} from "~/utils/dragToScroll";
const props = defineProps({
    item: Object,
    currentCategory: Object,
});

// Используйте ваш собственный хук для загрузки категорий, если это необходимо
const categories = ref(
    mockCategories.map((category) => ({
        ...category,
        selectedSubcategories: [],
    }))
);

const extraBar = ref(null);
const currentCategory = ref(null);
const isExtraContainerVisible = ref(false); // по умолчанию скрыт

// для скролла Options Bar
const extraBarInner = ref(null);

const selectCategory = (categoryName) => {
    const category = categories.value.find((c) => c.name === categoryName);

    if (currentCategory.value && currentCategory.value.name === categoryName) {
        // Переключаем видимость extra-container
        isExtraContainerVisible.value = !isExtraContainerVisible.value;

        // Если extra-container теперь скрыт, обнуляем текущую категорию
        if (!isExtraContainerVisible.value) {
            currentCategory.value = null;
            // Также нужно обнулить активные состояния всех категорий
            categories.value.forEach((cat) => {
                cat.isActive = false;
            });
        }
    } else {
        isExtraContainerVisible.value = true;
        currentCategory.value = category;

        if (category) {
            currentCategory.value = category;
        }

        categories.value.forEach((cat) => {
            cat.isActive = cat.name === categoryName;
        });
    }
};

const handleWheelEvent = (event) => {
    if (!extraBarInner.value) return;
    const { deltaX, deltaY } = event;
    extraBarInner.value.scrollLeft += deltaY + deltaX;
    event.preventDefault(); // Предотвратить стандартное поведение прокрутки
};

const updateCategory = ({ categoryName, subCategory }) => {
    const category = categories.value.find((c) => c.name === categoryName);
    if (category) {
        const index = category.selectedSubcategories.findIndex(
            (sub) => sub === subCategory
        );
        if (index === -1) {
            category.selectedSubcategories.push(subCategory);
        } else {
            category.selectedSubcategories.splice(index, 1);
        }
    }
    // Можно скрыть подкатегории после выбора, если это требуется логикой приложения
    // isSubcategoriesVisible.value = false;
};

onMounted(() => {
    if (extraBarInner.value) {
        extraBarInner.value.addEventListener("mousedown", (e) =>
            startDragging(e, extraBarInner.value)
        );
        extraBarInner.value.addEventListener("mouseleave", () =>
            stopDragging(extraBarInner.value)
        );
        extraBarInner.value.addEventListener("mouseup", () =>
            stopDragging(extraBarInner.value)
        );
        extraBarInner.value.addEventListener("mousemove", (e) =>
            handleDragging(e, extraBarInner.value)
        );
        extraBarInner.value.addEventListener("wheel", handleWheelEvent);
    }
});
</script>
<style>
.select-bar {
    display: grid;
    grid-column: span 3;
    background-color: #fff;
    overflow: hidden;
}

.select-category-bar {
    display: grid;
    grid-row: span 1;
    background-color: blue;
    height: 100%;


    &>.select-inner-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;

        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &>div {
            height: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            color: #fff;
            font-weight: bold;
            padding: 0 20px;
            flex-grow: 1;
            text-align: center;
            transition: 0.5s all;
        }
    }

}

.select-items-bar {
    display: grid;
    grid-row: span 4;
    background-color: red;
}
</style>