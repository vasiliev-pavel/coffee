export const extras = [
    {
        name: "Lid",
        isActive: false,
        multipleSelectionAllowed: false,
        subCategories: [
            { name: "Standard", price: 0.50, svgPath: "M5 5 L15 5 L15 15 L5 15 Z" },
            { name: "Sip Through", price: 0.75, svgPath: "M5 5 L15 5 L15 15 L5 15 Z" },
            { name: "None", price: 0.00, svgPath: "M5 5 L15 5 L15 15 L5 15 Z" },
        ],
    },
    {
        name: "t°",
        isActive: false,
        subCategories: [
            { name: "Hot", price: 0.00, svgPath: "M6 6 L14 6 L14 14 L6 14 Z" },
            { name: "Warm", price: 0.00, svgPath: "M6 6 L14 6 L14 14 L6 14 Z" },
            { name: "Cold", price: 0.00, svgPath: "M6 6 L14 6 L14 14 L6 14 Z" },
            { name: "Iced", price: 0.00, svgPath: "M6 6 L14 6 L14 14 L6 14 Z" },
        ],
        multipleSelectionAllowed: false,
    },
    {
        name: "Milk",
        isActive: false,
        subCategories: [
            { name: "Whole", price: 0.50, svgPath: "M7 7 L13 7 L13 13 L7 13 Z" },
            { name: "Skimmed", price: 0.50, svgPath: "M7 7 L13 7 L13 13 L7 13 Z" },
            { name: "Almond", price: 0.75, svgPath: "M7 7 L13 7 L13 13 L7 13 Z" },
            { name: "Soy", price: 0.75, svgPath: "M7 7 L13 7 L13 13 L7 13 Z" },
            { name: "Oat", price: 0.75, svgPath: "M7 7 L13 7 L13 13 L7 13 Z" },
        ],
        multipleSelectionAllowed: false,
    },
    {
        name: "Sugar",
        isActive: false,
        subCategories: [
            { name: "White Sugar", price: 0.25, svgPath: "M8 8 L12 8 L12 12 L8 12 Z" },
            { name: "Brown Sugar", price: 0.25, svgPath: "M8 8 L12 8 L12 12 L8 12 Z" },
            { name: "Honey", price: 0.50, svgPath: "M8 8 L12 8 L12 12 L8 12 Z" },
            { name: "Sugar Substitute", price: 1.00, svgPath: "M8 8 L12 8 L12 12 L8 12 Z" },
        ],
        multipleSelectionAllowed: true,
    },
    {
        name: "Espresso Shot",
        isActive: false,
        subCategories: [
            { name: "Single Shot", price: 0.50, svgPath: "M9 9 L11 9 L11 11 L9 11 Z" },
            { name: "Double Shot", price: 1.00, svgPath: "M9 9 L11 9 L11 11 L9 11 Z" },
            { name: "Triple Shot", price: 1.50, svgPath: "M9 9 L11 9 L11 11 L9 11 Z" },
        ],
        multipleSelectionAllowed: false,
    },
    {
        name: "Syrup",
        isActive: false,
        subCategories: [
            { name: "Vanilla", price: 0.50, svgPath: "M10 10 L14 10 L14 14 L10 14 Z" },
            { name: "Caramel", price: 0.50, svgPath: "M10 10 L14 10 L14 14 L10 14 Z" },
            { name: "Hazelnut", price: 0.50, svgPath: "M10 10 L14 10 L14 14 L10 14 Z" },
        ],
        multipleSelectionAllowed: true,
    },
    {
        name: "Toppings",
        isActive: false,
        subCategories: [
            { name: "Whipped Cream", price: 0.50, svgPath: "M11 11 L13 11 L13 13 L11 13 Z" },
            { name: "Marshmallows", price: 0.75, svgPath: "M11 11 L13 11 L13 13 L11 13 Z" },
        ],
        multipleSelectionAllowed: true,
    },
    {
        name: "Sprinkles",
        isActive: false,
        subCategories: [
            { name: "Chocolate", price: 0.50, svgPath: "M12 12 L12 12 L12 12 L12 12 Z" },
            { name: "Rainbow", price: 0.50, svgPath: "M12 12 L12 12 L12 12 L12 12 Z" },
        ],
        multipleSelectionAllowed: true,
    },
];


export const kitchens = [
    { id: 1, name: "Coffee" },
    { id: 2, name: "Sandwiches" },
    { id: 3, name: "Salads" },
    { id: 4, name: "Burgers" },
    { id: 5, name: "Wraps" },
];
export const menus = [
    { id: 1, name: "Section #1" },
    { id: 2, name: "Section #2" },
    { id: 3, name: "Section #3" },
];

export const categories = [
    { name: "Hot Coffee", hash: "#hot_coffee", isActive: false, svgPath: "" },
    { name: "Cold Coffee", hash: "#cold_coffee", isActive: false, svgPath: "" },
    { name: "Tea", hash: "#tea", isActive: false, svgPath: "" },
    { name: "Hot Chocolate", hash: "#hot_chocolate", isActive: false, svgPath: "" },
    { name: "Sweet Bakery", hash: "#sweet_bakery", isActive: false, svgPath: "" },
    { name: "Savoury Bakery", hash: "#savoury_bakery", isActive: false, svgPath: "" },
    { name: "Specialty", hash: "#specialty", isActive: false, svgPath: "" },
];

export const data = {
    hot_coffee: [
        {
            id: 1,
            name: "Latte",
            price: 4.5,
            photo: "hot_coffee.png",
            videoSrc: "./live.mp4",
        },
        {
            id: 2,
            name: "Cappuccino",
            price: 4.5,
            photo: "hot_coffee.png",
            videoSrc: "./live.mp4",

        },
        {
            id: 3,
            name: "Tinto",
            price: 3.0,
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
            price: 3.0,
            photo: "hot_coffee.png",
        },
        {
            id: 7,
            name: "Cortado",
            price: 1.0,
            photo: "hot_coffee.png",
        },
        {
            id: 8,
            name: "Macchiato",
            price: 1.0,
            photo: "hot_coffee.png",
        },
        {
            id: 9,
            name: "Black Eye",
            price: 3.5,
            photo: "hot_coffee.png",
        },
        {
            id: 10,
            name: "Flat White",
            price: 4.5,
            photo: "hot_coffee.png",
        },
        {
            id: 11,
            name: "Cafe Con Leche",
            price: 3.75,
            photo: "hot_coffee.png",
        },
    ],
    hot_chocolate: [
        {
            id: 12,
            name: "Milo Hot Chocolate",
            price: 4.5,
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
            price: 4.5,
            photo: "hot_coffee.png",
        },
        {
            id: 16,
            name: "Abuelita Cold",
            price: 4.5,
            photo: "hot_coffee.png",
        },
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
            price: 4.5,
            photo: "dessert_coffee.png",
            videoSrc: "./lemon_tart.mp4",
        },
        {
            id: 24,
            name: "Chai Latte Iced",
            price: 4.5,
            photo: "dessert_coffee.png",
        },
        {
            id: 25,
            name: "Matcha Latte",
            price: 4.5,
            photo: "dessert_coffee.png",
        },
        {
            id: 26,
            name: "Matcha Latte Iced",
            price: 4.5,
            photo: "dessert_coffee.png",
        },
        {
            id: 27,
            name: "Hot Tea",
            price: 0.3,
            photo: "dessert_coffee.png",
        },
    ],
    sweet_bakery: [
        {
            id: 28,
            name: "Butter Croissant",
            price: 4.0,
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
            price: 3.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 31,
            name: "Orange Earl Grey Sconce",
            price: 3.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 32,
            name: "Pan De Bono Con Guava",
            price: 3.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 33,
            name: "Churros",
            price: 3.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 34,
            name: "Almond Croissant",
            price: 3.0,
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
            price: 4.5,
            photo: "dessert_coffee.png",
        },
        {
            id: 40,
            name: "Almojabana",
            price: 3.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 41,
            name: "Ground Beef Empanadas",
            price: 3.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 42,
            name: "Chicken Empanadas",
            price: 3.0,
            photo: "dessert_coffee.png",
        },
    ],
    specialty: [
        {
            id: 43,
            name: "House Roast",
            price: 16.0,
            photo: "dessert_coffee.png",
            videoSrc: "./specialty.mp4",
        },
        {
            id: 44,
            name: "Las Cascadas",
            price: 16.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 45,
            name: "House Decaf",
            price: 16.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 46,
            name: "House Espresso",
            price: 16.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 47,
            name: "Finca Verona",
            price: 16.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 48,
            name: "Guayacao",
            price: 16.0,
            photo: "dessert_coffee.png",
        },
        {
            id: 49,
            name: "Santa Maria",
            price: 16.0,
            photo: "dessert_coffee.png",
        },
    ],
};
