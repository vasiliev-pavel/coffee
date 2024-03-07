export const extras = [
    { name: "Cup", isActive: false, subCategories: ["Small", "Medium", "Large"] },
    { name: "Lid", isActive: false, subCategories: ["Standard", "Sip Through", "None"] },
    { name: "Temperature", isActive: false, subCategories: ["Hot", "Warm", "Cold", "Iced"] },
    { name: "Milk", isActive: false, subCategories: ["Whole", "Skimmed", "Almond", "Soy", "Oat"] },
    { name: "Sugar", isActive: false, subCategories: ["White Sugar", "Brown Sugar", "Honey", "No Sugar", "Sugar Substitute"] },
    { name: "Espresso Shot", isActive: false, subCategories: ["Single Shot", "Double Shot", "Triple Shot"] },
    { name: "Syrup", isActive: false, subCategories: ["Vanilla", "Caramel", "Hazelnut", "No Syrup"] },
    { name: "Toppings", isActive: false, subCategories: ["Whipped Cream", "Marshmallows", "None"] },
    { name: "Sprinkles", isActive: false, subCategories: ["Chocolate", "Rainbow", "None"] },
];


export const categories = [
    { name: "Hot Coffee", hash: "#hot_coffee", isActive: false },
    { name: "Cold Coffee", hash: "#cold_coffee", isActive: false },
    { name: "Tea", hash: "#tea", isActive: false },
    { name: "Hot Chocolate", hash: "#hot_chocolate", isActive: false },
    { name: "Sweet Bakery", hash: "#sweet_bakery", isActive: false },
    { name: "Savoury Bakery", hash: "#savoury_bakery", isActive: false },
    { name: "Specialty", hash: "#specialty", isActive: false },
];

export const data = {
    hot_coffee: [
        {
            id: 1,
            name: "Latte",
            price: 4.50,
            photo: "hot_coffee.png",
            videoSrc: "./live.mp4",
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 4.50,
            photo: "hot_coffee.png",
        },
        {
            id: 3,
            name: "Tinto",
            price: 3.00,
            photo: "hot_coffee.png",
        },
        {
            id: 4,
            name: "Americano",
            price: 3.75,
            photo: "hot_coffee.png",
        },
        {
            id: 5,
            name: "Espresso",
            price: 3.75,
            photo: "hot_coffee.png",
        },
        {
            id: 6,
            name: "Decaf",
            price: 3.00,
            photo: "hot_coffee.png",
        },
        {
            id: 7,
            name: "Cortado",
            price: 1.00,
            photo: "hot_coffee.png",
        },
        {
            id: 8,
            name: "Macchiato",
            price: 1.00,
            photo: "hot_coffee.png",
        },
        {
            id: 9,
            name: "Black Eye",
            price: 3.50,
            photo: "hot_coffee.png",
        },
        {
            id: 10,
            name: "Flat White",
            price: 4.50,
            photo: "hot_coffee.png",
        },
        {
            id: 11,
            name: "Cafe Con Leche",
            price: 3.75,
            photo: "hot_coffee.png",
        }
    ],
    hot_chocolate: [
        {
            id: 12,
            name: "Milo Hot Chocolate",
            price: 4.50,
            photo: "hot_coffee.png",
            videoSrc: "./live.mp4",
        },
        {
            id: 13,
            name: "Milo Frio",
            price: 5.75,
            photo: "hot_coffee.png",
        },
        {
            id: 14,
            name: "Milo Frio Cold",
            price: 5.75,
            photo: "hot_coffee.png",
        },
        {
            id: 15,
            name: "Abuelita",
            price: 4.50,
            photo: "hot_coffee.png",
        },
        {
            id: 16,
            name: "Abuelita Cold",
            price: 4.50,
            photo: "hot_coffee.png",
        }
    ],
    cold_coffee: [
        {
            id: 17,
            name: "Cold Coffee 1",
            price: 10.99,
            photo: "cold_coffee.png",
            videoSrc: "./Ice_Latte.mp4",
        },
        {
            id: 18,
            name: "Cold Coffee 2",
            price: 12.99,
            photo: "cold_coffee.png",
        },
        {
            id: 19,
            name: "Cold Coffee 3",
            price: 12.99,
            photo: "cold_coffee.png",
        },
        {
            id: 20,
            name: "Cold Coffee 4",
            price: 12.99,
            photo: "cold_coffee.png",
        },
        {
            id: 21,
            name: "Cold Coffee 3",
            price: 12.99,
            photo: "cold_coffee.png",
        },
        {
            id: 22,
            name: "Cold Coffee 4",
            price: 12.99,
            photo: "cold_coffee.png",
        },
    ],
    tea: [
        {
            id: 23,
            name: "Chai Latte",
            price: 4.50,
            photo: "dessert_coffee.png",
            videoSrc: "./lemon_tart.mp4",
        },
        {
            id: 24,
            name: "Chai Latte Iced",
            price: 4.50,
            photo: "dessert_coffee.png",
        },
        {
            id: 25,
            name: "Matcha Latte",
            price: 4.50,
            photo: "dessert_coffee.png",
        },
        {
            id: 26,
            name: "Matcha Latte Iced",
            price: 4.50,
            photo: "dessert_coffee.png",
        },
        {
            id: 27,
            name: "Hot Tea",
            price: 0.30,
            photo: "dessert_coffee.png",
        },
    ],
    sweet_bakery: [
        {
            id: 28,
            name: "Butter Croissant",
            price: 4.00,
            photo: "dessert_coffee.png",
            videoSrc: "./bakery.mp4",
        },
        {
            id: 29,
            name: "Chocolate Croissant",
            price: 4.25,
            photo: "dessert_coffee.png",
        },
        {
            id: 30,
            name: "Seasonal Galette",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 31,
            name: "Orange Earl Grey Sconce",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 32,
            name: "Pan De Bono Con Guava",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 33,
            name: "Churros",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 34,
            name: "Almond Croissant",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 35,
            name: "Special Cookies",
            price: 3.75,
            photo: "dessert_coffee.png",
        },
        {
            id: 36,
            name: "Banana Bread",
            price: 3.75,
            photo: "dessert_coffee.png",
        },
        {
            id: 37,
            name: "White Chocolate Cranberry Muffins",
            price: 3.75,
            photo: "dessert_coffee.png",
        },
    ],
    savoury_bakery: [
        {
            id: 38,
            name: "Ham & Cheese Croissant",
            price: 5.25,
            photo: "dessert_coffee.png",
            videoSrc: "./bakery.mp4",
        },
        {
            id: 39,
            name: "Spinach Mushroom Buddy",
            price: 4.50,
            photo: "dessert_coffee.png",
        },
        {
            id: 40,
            name: "Almojabana",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 41,
            name: "Ground Beef Empanadas",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 42,
            name: "Chicken Empanadas",
            price: 3.00,
            photo: "dessert_coffee.png",
        },
    ],
    specialty: [
        {
            id: 43,
            name: "House Roast",
            price: 16.00,
            photo: "dessert_coffee.png",
            videoSrc: "./specialty.mp4",
        },
        {
            id: 44,
            name: "Las Cascadas",
            price: 16.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 45,
            name: "House Decaf",
            price: 16.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 46,
            name: "House Espresso",
            price: 16.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 47,
            name: "Finca Verona",
            price: 16.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 48,
            name: "Guayacao",
            price: 16.00,
            photo: "dessert_coffee.png",
        },
        {
            id: 49,
            name: "Santa Maria",
            price: 16.00,
            photo: "dessert_coffee.png",
        },
    ]
};