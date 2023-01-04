import uniqid from 'uniqid';

class Car {
    static #cars = [
        {
            id: 'knpdfajhfpjpfaq',
            model: 'Tesla',
            year: '2020',
            image: 'https://ecomento.de/wp-content/uploads/2022/11/Tesla-Model-3.jpg',
            fuel: 'Electro',
            mileage: '20000'
        },
        {
            id: 'üokjodfjasjo',
            model: 'Kia',
            year: '2022',
            image: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev6/discover/kia_ev6_carousel_exterior_03_1160x653.jpg',
            fuel: 'Hybrid',
            mileage: '1500'
        }];

    constructor(model, year, image, fuel, mileage) {
        this.id = uniqid();
        this.model = model;
        this.year = year;
        this.image = image;
        this.fuel = fuel;
        this.mileage = mileage;
    }

    static getAll() {
        return Car.#cars.slice();
    };

    static add(car) {
        Car.#cars.push(car);
    }

}

export default Car;