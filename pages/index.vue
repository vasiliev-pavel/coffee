<template>
  <div class="main">
    <CategoryBar />
    <SectionBar id="hot_coffee" category="Hot Coffee" :items="hot_coffee" />
    <SectionBar id="cold_coffee" category="Cold Coffee" :items="cold_coffee" />
    <SectionBar id="tea" category="Tea" :items="tea" />
    <SectionBar id="hot_chocolate" category="Hot Chocolate" :items="hot_chocolate" />
    <SectionBar id="sweet_bakery" category="Sweet Bakery" :items="sweet_bakery" />
    <SectionBar id="savoury_bakery" category="Savoury Bakery" :items="savoury_bakery" />
    <SectionBar id="specialty" category="Specialty" :items="specialty" />
  </div>
</template>

<script>
import { data } from "~/mock.ts";

export default {
  data() {
    return {
      ...data,
    };
  },
};
</script>

<style>
.main {
  padding-bottom: 20rem;
}
</style>
