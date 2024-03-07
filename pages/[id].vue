<template>
    <ItemBar :item="item" />
</template>

<script>
import { data } from "~/mock.ts";
import ItemBar from "~/components/ItemBar.vue"

export default {
    components: {
        ItemBar,
    },
    data() {
        return {
            item: null,
        };
    },
    created() {
        const items = Object.values(data).flat();
        this.item = items.find(item => item.id === parseInt(this.$route.params.id));
    },
};
</script>