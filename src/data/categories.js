import MenImage from '../images/categories/men.jpg';
import LadiesImage from '../images/categories/ladies.jpg';
import MenTShirtImage from '../images/products/men-t-shirt.jpg';
import MenSunglassesImage from '../images/products/men-sunglasses.jpg';
import LadiesTShirtImage from '../images/products/ladies-t-shirt.jpg';

const CATEGORIES = [
    {
        id: 'men-fashion',
        name: "Men's Fashion",
        image: MenImage,
        imageStyle: {
            marginTop: '-250px'
        },
        titleStyle: {
            right: '17%'
        },
        products: [
            {
                name: "Men's T-Shirt",
                price: 75.00,
                image: MenTShirtImage
            }, {
                name: "Men's Sunglasses",
                price: 60.00,
                image: MenSunglassesImage
            }
        ]
    }, {
        id: 'ladies-fashion',
        name: 'Ladies Fashion',
        image: LadiesImage,
        imageStyle: {
            marginTop: '-240px'
        },
        titleStyle: {
            left: '17%'
        },
        products: [
            {
                name: "Ladies T-Shirt",
                price: 50.00,
                image: LadiesTShirtImage
            }
        ]
    }
];

export default CATEGORIES;