<template>
    <CardBar :item="item" />
</template>

<script>
import { data } from "~/mock.ts";

export default {
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