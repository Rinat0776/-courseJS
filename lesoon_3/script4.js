"use strict";
console.log("///Task-4///");
const products2 = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

let productsWithPhotos = products2.filter(function (item) {
    return "photos" in item && item.photos.length > 0;
})
let comparePriceProducts = products2.sort(function (a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
});
console.log(productsWithPhotos);
console.log(comparePriceProducts);