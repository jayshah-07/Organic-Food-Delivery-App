
export function formatPrice(price) {
    return price.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}
export const foodItems = [
    {
        name: 'Supreme Pizza',
        img: '/img/supreme-pizza.jpg',
        section: 'Pizza',
        price: 10
    },
    {
        name: 'Pineapple Pizza',
        img: '/img/pineapple-pizza.jpg',
        section: 'Pizza',
        price: 10
    },
    {
        name: 'Burgers',
        img: '/img/burger.jpg',
        section: 'Sandwiches',
        price: 10
    },
    {
        name: 'French Fries',
        img: '/img/fries.jpg',
        section: 'Sides',
        price: 5
    },
    {
        name: 'Sandwiches',
        img: '/img/hero-sandwich.jpg',
        section: 'Sandwiches',
        price: 10
    },
    {
        name: 'Salads',
        img: '/img/salad.jpg',
        section: 'Sides',
        price: 8
    },
    {
        name: 'Desserts',
        img: '/img/donuts.jpg',
        section: 'Sides',
        price: 5
    },
    {
        price: 1,
        name: 'Soda',
        img: '/img/drinks.jpg',
        section: 'Drinks',
        choices: ['Coke', 'Sprite', 'Grape Soda']
    }
];

export const foods = foodItems.reduce((res,food) => {
    if(!res[food.section]){
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {});