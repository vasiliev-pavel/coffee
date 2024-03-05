export const cups = [
    {
        volume: "8 oz",
        size: 'S'
    },
    {
        volume: "12 oz",
        size: 'M'
    },
    {
        volume: "16 oz",
        size: 'L'
    },
];

export const categories = [
    { id: 'tea', name: "Tea" },
    { id: 'hot_coffee', name: "Hot Coffee" },
    { id: 'cold_coffee', name: "Cold Coffee" },
    { id: 'hot_chocolate', name: "Hot Chocolate" },
    { id: 'Bakery', name: "Bakery" },
    { id: 'signature_coffee', name: "Signature Coffee" },
];

export const teas = [
    {
        id: 1,
        photo: "./chai_latte_iced.png", // Пример, реальный URL нужно заменить
        title: "Chai Latte - Iced",
        description: "", // Описание отсутствует в HTML
        categories: ["teas"],
        price: "5.75+",
    },
    {
        id: 2,
        photo: "./chai_latte.png", // Пример, реальный URL нужно заменить
        title: "Chai Latte",
        description: "", // Описание отсутствует в HTML
        categories: ["teas"],
        price: "4.50+",
    },
    {
        id: 3,
        photo: "./matcha_latte.png", // Пример, реальный URL нужно заменить
        title: "Matcha latte",
        description: "", // Описание отсутствует в HTML
        categories: ["teas"],
        price: "4.50+",
    },
    {
        id: 4,
        photo: "./hot_tea.png", // Пример, реальный URL нужно заменить
        title: "Hot Tea",
        description: "", // Описание отсутствует в HTML
        categories: ["teas"],
        price: "0.30+",
    },
    {
        id: 5,
        photo: "./matcha_latte_iced.png", // Пример, реальный URL нужно заменить
        title: "Matcha Latte - Iced",
        description: "", // Описание отсутствует в HTML
        categories: ["teas"],
        price: "5.75+",
    }
];

export const hotCoffees = [
    {
        id: 1,
        photo: "./latte.png", // Пример, реальный URL нужно заменить
        title: "Latte",
        description: "", // Описание отсутствует в HTML
        categories: ["hot_coffees"],
        price: "4.50+",
    },
    {
        id: 2,
        photo: "./cappuccino.png", // Пример, реальный URL нужно заменить
        title: "Cappuccino",
        description: "Drink with steamed milk, milk foam and espresso", // Описание из HTML
        categories: ["hot_coffees"],
        price: "4.50+",
    },
    {
        id: 3,
        photo: "./tinto_brewed_coffee.png", // Пример, реальный URL нужно заменить
        title: "Tinto (Brewed Coffee)",
        description: "Drip Coffee Alias 'El Tinto'", // Описание из HTML
        categories: ["hot_coffees"],
        price: "3.00+",
    },
    {
        id: 4,
        photo: "./pour_over_house_coffee.png", // Пример, реальный URL нужно заменить
        title: "Pour Over (House Coffee)",
        description: "", // Описание отсутствует в HTML
        categories: ["hot_coffees"],
        price: "6.00+",
    },
    {
        id: 5,
        photo: "./americano.png", // Пример, реальный URL нужно заменить
        title: "Americano",
        description: "", // Описание отсутствует в HTML
        categories: ["hot_coffees"],
        price: "3.75+",
    },
    {
        id: 6,
        photo: "./espresso.png", // Пример, реальный URL нужно заменить
        title: "Espresso",
        description: "espresso shot", // Описание из HTML
        categories: ["hot_coffees"],
        price: "1.00+",
    },
    // Дополнительные товары...
];

export const coldCoffees = [
    {
        id: 1,
        photo: "./iced_coffee.png", // Пример, реальный URL нужно заменить
        title: "Iced Coffee",
        description: "", // Описание отсутствует в HTML
        categories: ["cold_coffees"],
        price: "4.00+",
    },
    {
        id: 2,
        photo: "./iced_latte.png", // Пример, реальный URL нужно заменить
        title: "Iced Latte",
        description: "", // Описание отсутствует в HTML
        categories: ["cold_coffees"],
        price: "5.75+",
    },
    {
        id: 3,
        photo: "./iced_matcha_latte.png", // Пример, реальный URL нужно заменить
        title: "Iced Matcha Latte",
        description: "", // Описание отсутствует в HTML
        categories: ["cold_coffees"],
        price: "5.75+",
    },
    {
        id: 4,
        photo: "./iced_americano.png", // Пример, реальный URL нужно заменить
        title: "Iced Americano",
        description: "", // Описание отсутствует в HTML
        categories: ["cold_coffees"],
        price: "4.00+",
    },
    {
        id: 5,
        photo: "./iced_espresso.png", // Пример, реальный URL нужно заменить
        title: "Iced Espresso",
        description: "", // Описание отсутствует в HTML
        categories: ["cold_coffees"],
        price: "1.00+",
    },
    {
        id: 6,
        photo: "./iced_black_eye.png", // Пример, реальный URL нужно заменить
        title: "Iced Black Eye",
        description: "Tinto (iced or hot) with a double shot of espresso", // Описание из HTML
        categories: ["cold_coffees"],
        price: "3.50+",
    },
    {
        id: 7,
        photo: "./cold_brew.png", // Пример, реальный URL нужно заменить
        title: "Cold Brew",
        description: "", // Описание отсутствует в HTML
        categories: ["cold_coffees"],
        price: "5.75+",
    },
    {
        id: 8,
        photo: "./iced_coffee_lemonade.png", // Пример, реальный URL нужно заменить
        title: "Iced Coffee Lemonade",
        description: "Refreshing Coffee Lemonade", // Описание из HTML
        categories: ["cold_coffees"],
        price: "5.75",
    },
    {
        id: 9,
        photo: "./espresso_tonic_iced.png", // Пример, реальный URL нужно заменить
        title: "Espresso Tonic (Iced)",
        description: "Two shots espresso pour over iced tonic water. Option to add fresh lime or orange.", // Описание из HTML
        categories: ["cold_coffees"],
        price: "5.75+",
    },
    {
        id: 10,
        photo: "./iced_milo_latte.png", // Пример, реальный URL нужно заменить
        title: "Iced Milo Latte",
        description: "Cold Milo with a double shot of espresso", // Описание из HTML
        categories: ["cold_coffees"],
        price: "5.75+",
    }
];

export const hotChocolates = [
    {
        id: 1,
        photo: "./milo_hot_chocolate.png", // Пример, реальный URL нужно заменить
        title: "Milo Hot Chocolate",
        description: "Hot Chocolate", // Описание из HTML
        categories: ["hot_chocolate"],
        price: "4.50+",
    },
    {
        id: 2,
        photo: "./milo_frio_cold.png", // Пример, реальный URL нужно заменить
        title: "Milo Frío (Cold)",
        description: "", // Описание отсутствует в HTML
        categories: ["hot_chocolate"],
        price: "5.75+",
    },
    {
        id: 3,
        photo: "./abuelita_cold.png", // Пример, реальный URL нужно заменить
        title: "Abuelita (Cold)",
        description: "", // Описание отсутствует в HTML
        categories: ["hot_chocolate"],
        price: "5.75+",
    },
    {
        id: 4,
        photo: "./abuelita_hot.png", // Пример, реальный URL нужно заменить
        title: "Abuelita (Hot)",
        description: "Hot Chocolate", // Описание из HTML
        categories: ["hot_chocolate"],
        price: "4.50+",
    }
];

export const bakery = [
    {
        id: 1,
        photo: "./butter_croissant.png", // Пример, реальный URL нужно заменить
        title: "Butter Croissant",
        description: "", // Описание отсутствует в HTML
        categories: ["bakery"],
        price: "4.00",
    },
    {
        id: 2,
        photo: "./ham_cheese_croissant.png", // Пример, реальный URL нужно заменить
        title: "Ham and Cheese Croissant",
        description: "", // Описание отсутствует в HTML, товар вне запаса
        categories: ["bakery"],
        price: "5.25",
        outOfStock: true,
    },
    {
        id: 3,
        photo: "./spinach_mushroom_buddy.png", // Пример, реальный URL нужно заменить
        title: "Spinach Mushroom Buddy",
        description: "", // Описание отсутствует в HTML, товар вне запаса
        categories: ["bakery"],
        price: "4.50",
        outOfStock: true,
    },
    {
        id: 4,
        photo: "./almojabana.png", // Пример, реальный URL нужно заменить
        title: "Almojabana",
        description: "A traditional Colombian cheese bread.", // Описание из HTML
        categories: ["bakery"],
        price: "3.00",
    },
    {
        id: 5,
        photo: "./pan_de_bono.png", // Пример, реальный URL нужно заменить
        title: "Pan de Bono",
        description: "", // Описание отсутствует в HTML
        categories: ["bakery"],
        price: "3.00+",
    },
    {
        id: 6,
        photo: "./chocolate_croissants.png", // Пример, реальный URL нужно заменить
        title: "Chocolate Croissants",
        description: "Flaky and buttery, our croissants are made with European butter. The addition of our very own sourdough starter further enhances the wheat and the cultured character of the butter. Made with Cacao Barry dark chocolate.", // Описание из HTML
        categories: ["bakery"],
        price: "4.25",
    },
    // Дополнительные товары...
];


export const singleBagsOfCoffee = [
    {
        id: 1,
        photo: "./house_roast_colombia.png", // Пример, реальный URL нужно заменить
        title: "House Roast (Colombia)",
        description: "Medium Roast. Notes: Limon, Caramel and Panela (brown sugar)", // Описание из HTML, товар вне запаса
        categories: ["single_bags_of_coffee"],
        price: "16.00",
        outOfStock: true,
    },
    {
        id: 2,
        photo: "./las_cascadas_mexico.png", // Пример, реальный URL нужно заменить
        title: "Las Cascadas (Mexico)",
        description: "Dark Roast. Notes: Orange & Cherry", // Описание из HTML, товар вне запаса
        categories: ["single_bags_of_coffee"],
        price: "16.00",
        outOfStock: true,
    },
    {
        id: 3,
        photo: "./house_decaf.png", // Пример, реальный URL нужно заменить
        title: "House Decaf",
        description: "Origin: Colombia", // Описание из HTML, товар вне запаса
        categories: ["single_bags_of_coffee"],
        price: "16.00",
        outOfStock: true,
    },
    {
        id: 4,
        photo: "./house_espresso.png", // Пример, реальный URL нужно заменить
        title: "House Espresso",
        description: "Colombian Roast", // Описание из HTML
        categories: ["single_bags_of_coffee"],
        price: "16.00",
    },
    {
        id: 5,
        photo: "./finca_verona_nicaragua.png", // Пример, реальный URL нужно заменить
        title: "Finca Verona (Nicaragua)",
        description: "Notes: Honey, Apple & Chocolate", // Описание из HTML
        categories: ["single_bags_of_coffee"],
        price: "16.00",
    },
    {
        id: 6,
        photo: "./guayacao_colombia.png", // Пример, реальный URL нужно заменить
        title: "Guayacao (Colombia)",
        description: "Notes: Caramel, Citrus & Panela", // Описание из HTML
        categories: ["single_bags_of_coffee"],
        price: "16.00",
    },
    {
        id: 7,
        photo: "./santa_maria_colombia.png", // Пример, реальный URL нужно заменить
        title: "Santa Maria (Colombia)",
        description: "Notes: Almond & Panela", // Описание из HTML
        categories: ["single_bags_of_coffee"],
        price: "16.00",
    },
    {
        id: 8,
        photo: "./3lb_bag.png", // Пример, реальный URL нужно заменить
        title: "3Lb - Bag",
        description: "Notes of Caramel, Citrus & Panela", // Описание из HTML
        categories: ["single_bags_of_coffee"],
        price: "49.00",
    },
    {
        id: 9,
        photo: "./special_coffee_8oz.png", // Пример, реальный URL нужно заменить
        title: "Special Coffee 8oz",
        description: "", // Описание отсутствует в HTML
        categories: ["single_bags_of_coffee"],
        price: "22.50",
    }
];


export const products = [
    {
        id: 1,
        photo: "./hot_coffee.png",
        video: "cappuccino.mp4",
        title: "Cappuccino",
        description: "Classic coffee with steamed microfoam",
        categories: ["black", "with_milk"],
        sub_category: "hot_drinks",
        price: "3.45 ",
        nutritions: "188kcal",
        weight: "190g",
        protein: "5.8g",
        fats: "5.8g",
        carbs: "9g",
        ingredients: {
            description: ["espresso", "milk"],
            may_contain: ["nuts", "gluten"],
            allergens: ["caffeine", "lactose"]
        }
    },
    {
        id: 2,
        photo: "./cold_coffee.png",
        video: "green_tea.mp4",
        title: "Green Tea",
        description: "Freshly brewed green tea with a delicate flavor",
        categories: ["tea", "fresh"],
        sub_category: "hot_drinks",
        price: "2.50 ",
        nutritions: "0kcal",
        weight: "180g",
        protein: "0g",
        fats: "0g",
        carbs: "0g",
        ingredients: {
            description: ["green tea leaves"],
            may_contain: ["honey", "sugar"],
            allergens: ["caffeine"]
        }
    },
    {
        id: 3,
        photo: "./dessert_coffee.png",
        video: "blueberry_cheesecake.mp4",
        title: "Blueberry Cheesecake",
        description: "Creamy cheesecake with a tangy blueberry topping",
        categories: ["food", "speciality"],
        sub_category: "desserts",
        price: "4.95 ",
        nutritions: "320kcal",
        weight: "150g",
        protein: "6g",
        fats: "18g",
        carbs: "36g",
        ingredients: {
            description: ["cream cheese", "blueberries", "sugar", "eggs"],
            may_contain: ["nuts", "gluten"],
            allergens: ["lactose", "eggs"]
        }
    },
    {
        id: 4,
        photo: "./dessert_coffee.png",
        video: "lemon_iced_tea.mp4",
        title: "Lemon Iced Tea",
        description: "Refreshing iced tea with a splash of lemon",
        categories: ["tea", "iced_drinks", "lemonade"],
        sub_category: "cold_drinks",
        price: "2.95 ",
        nutritions: "80kcal",
        weight: "250g",
        protein: "0g",
        fats: "0g",
        carbs: "20g",
        ingredients: {
            description: ["black tea", "lemon juice", "sugar"],
            may_contain: ["mint", "honey"],
            allergens: ["caffeine"]
        }
    },
    {
        id: 5,
        photo: "./hot_coffee.png",
        video: "avocado_toast.mp4",
        title: "Avocado Toast",
        description: "Crispy toast topped with creamy avocado and a pinch of salt",
        categories: ["food", "fresh"],
        sub_category: "snacks",
        price: "5.45 ",
        nutritions: "250kcal",
        weight: "120g",
        protein: "4g",
        fats: "15g",
        carbs: "28g",
        ingredients: {
            description: ["sourdough bread", "avocado"],
            may_contain: ["sesame seeds", "tomatoes"],
            allergens: ["gluten"]
        }
    },
    {
        id: 6,
        photo: "./cold_coffee.png",
        video: "matcha_latte.mp4",
        title: "Matcha Latte",
        description: "Smooth and creamy matcha blended with steamed milk",
        categories: ["with_milk", "matcha_and_cocoa"],
        sub_category: "hot_drinks",
        price: "4.25 ",
        nutritions: "180kcal",
        weight: "200g",
        protein: "6g",
        fats: "7g",
        carbs: "18g",
        ingredients: {
            description: ["matcha green tea powder", "milk"],
            may_contain: ["sugar", "honey"],
            allergens: ["caffeine", "lactose"]
        }
    },
    {
        id: 7,
        photo: "./hot_coffee.png",
        video: "fruit_salad.mp4",
        title: "Fruit Salad",
        description: "A fresh mix of seasonal fruits",
        categories: ["fresh", "food"],
        sub_category: "snacks",
        price: "3.75 ",
        nutritions: "120kcal",
        weight: "250g",
        protein: "2g",
        fats: "0.5g",
        carbs: "28g",
        ingredients: {
            description: ["apples", "bananas", "strawberries", "grapes"],
            may_contain: ["kiwi", "orange"],
            allergens: []
        }
    },
    {
        id: 8,
        photo: "./dessert_coffee.png",
        video: "chicken_wrap.mp4",
        title: "Chicken Wrap",
        description: "Grilled chicken with vegetables and sauce in a soft tortilla",
        categories: ["food", "take_away"],
        sub_category: "main_courses",
        price: "6.50 ",
        nutritions: "350kcal",
        weight: "300g",
        protein: "25g",
        fats: "10g",
        carbs: "35g",
        ingredients: {
            description: ["chicken breast", "lettuce", "tomato", "tortilla", "sauce"],
            may_contain: ["cheese", "onions"],
            allergens: ["gluten"]
        }
    },
    {
        id: 9,
        photo: "./hot_coffee.png",
        video: "cold_brew_coffee.mp4",
        title: "Cold Brew Coffee",
        description: "Smooth, cold-steeped coffee served over ice",
        categories: ["black", "iced_drinks"],
        sub_category: "cold_drinks",
        price: "3.00 ",
        nutritions: "5kcal",
        weight: "250g",
        protein: "0.3g",
        fats: "0g",
        carbs: "1g",
        ingredients: {
            description: ["cold brew coffee concentrate", "water", "ice"],
            may_contain: ["milk", "sugar", "syrup"],
            allergens: ["caffeine"]
        }
    },
    {
        id: 10,
        photo: "./cold_coffee.png",
        video: "vegan_burger.mp4",
        title: "Vegan Burger",
        description: "Plant-based burger patty with vegan cheese on a whole wheat bun",
        categories: ["food", "speciality"],
        sub_category: "main_courses",
        price: "7.95 ",
        nutritions: "420kcal",
        weight: "320g",
        protein: "22g",
        fats: "20g",
        carbs: "40g",
        ingredients: {
            description: ["plant-based patty", "vegan cheese", "lettuce", "tomato", "whole wheat bun"],
            may_contain: ["onions", "pickles"],
            allergens: ["gluten", "soy"]
        }
    }

];
