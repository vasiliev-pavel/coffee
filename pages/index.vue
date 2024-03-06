<template>
  <div class="main">
    <CategoryBar />
    <SectionBar
      id="hot_chocolate"
      category="Hot Chocolate"
      :items="hot_chocolate"
    />
    <SectionBar id="hot_coffee" category="Hot Coffee" :items="tea" />
    <SectionBar
      id="cold_coffee"
      category="Cold Chocolate"
      :items="cold_coffee"
    />
    <SectionBar id="tea" category="Tea" :items="tea" />
    <SectionBar id="bakery" category="Bakery" :items="bakery" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hot_chocolate: [
        {
          id: 1,
          name: "Hot Chocolate 1",
          price: 10.99,
          photo: "hot_coffee.png",
          videoSrc: "./cappucino.mp4",
        },
        {
          id: 2,
          name: "Hot Chocolate 3",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 3,
          name: "Hot Chocolate 3",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 4,
          name: "Hot Chocolate 4",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 5,
          name: "Hot Chocolate 5",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 6,
          name: "Hot Chocolate 6",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 4,
          name: "Hot Chocolate 4",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 5,
          name: "Hot Chocolate 5",
          price: 12.99,
          photo: "hot_coffee.png",
        },
        {
          id: 6,
          name: "Hot Chocolate 6",
          price: 12.99,
          photo: "hot_coffee.png",
        },
      ],
      cold_coffee: [
        {
          id: 1,
          name: "Cold Coffee 1",
          price: 10.99,
          photo: "cold_coffee.png",
          videoSrc: "./Ice_Latte.mp4",
        },
        {
          id: 2,
          name: "Cold Coffee 2",
          price: 12.99,
          photo: "cold_coffee.png",
        },
        {
          id: 3,
          name: "Cold Coffee 3",
          price: 12.99,
          photo: "cold_coffee.png",
        },
        {
          id: 4,
          name: "Cold Coffee 4",
          price: 12.99,
          photo: "cold_coffee.png",
        },
        {
          id: 5,
          name: "Cold Coffee 3",
          price: 12.99,
          photo: "cold_coffee.png",
        },
        {
          id: 6,
          name: "Cold Coffee 4",
          price: 12.99,
          photo: "cold_coffee.png",
        },
      ],
      tea: [
        {
          id: 1,
          name: "Dessert Coffee 1",
          price: 10.99,
          photo: "dessert_coffee.png",
          videoSrc: "./lemon_tart.mp4",
        },
        {
          id: 2,
          name: "Dessert Coffee 2",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 3,
          name: "Dessert Coffee 3",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 4,
          name: "Dessert Coffee 4",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 5,
          name: "Dessert Coffee 5",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 6,
          name: "Dessert Coffee 6",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
      ],
      bakery: [
        {
          id: 1,
          name: "Dessert Coffee 1",
          price: 10.99,
          photo: "dessert_coffee.png",
          videoSrc: "./bakery.mp4",
        },
        {
          id: 2,
          name: "Dessert Coffee 2",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 3,
          name: "Dessert Coffee 3",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 4,
          name: "Dessert Coffee 4",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 5,
          name: "Dessert Coffee 5",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
        {
          id: 6,
          name: "Dessert Coffee 6",
          price: 12.99,
          photo: "dessert_coffee.png",
        },
      ],
    };
  },
};
</script>

<style>
.main {
  padding-bottom: 20rem;
}
</style>
