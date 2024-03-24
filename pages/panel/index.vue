<template>
    <h1>Menu</h1>
    <div class="panel-menu gap-10">
        <NuxtLink to="/panel/settings">Settings</NuxtLink>
        <NuxtLink to="/panel/payments">Payments</NuxtLink>
        <NuxtLink to="/panel/reports">Reports</NuxtLink>
        <NuxtLink to="/panel/menu/categories">Categories</NuxtLink>
        <NuxtLink to="/panel/menu/ingridients">Ingridients</NuxtLink>
        <NuxtLink to="/panel/menu/items">Items</NuxtLink>
    </div>
</template>
<style>
.panel h1 {
    color: #fff;
    font-weight: bold;
    font-size: 4rem;
    margin-top: 2rem;
}


.panel-menu {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));


    &>a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3rem 0;
        background-color: #fff;
        box-shadow: rgba(6, 5, 50, 0.15) 0px 4px 22px -6px;
        border-radius: 0.25rem;
        font-size: 1.6rem;
        font-family: Kanit;
        font-weight: bold;
        grid-column: span 1;
        grid-row: span 1;
        transition: 0.3s all;
        color: #484848;

        &:hover {
            color: #0a246b;
            box-shadow: rgba(6, 5, 50, 0.15) 0px 0px 12px -4px;
        }
    }


}

@media (min-width: 0px) and (max-width: 300px) {
    .panel-menu {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

@media (min-width: 300px) and (max-width: 500px) {
    .panel-menu {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}
</style>
<script setup>
definePageMeta({
    layout: "panel",
});
</script>