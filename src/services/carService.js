import Car from '../Models/carModel.js'

const carDb = [
    {
        model: 'Tesla',
        year: '2020',
        image: 'https://ecomento.de/wp-content/uploads/2022/11/Tesla-Model-3.jpg',
        fuel: 'Electro',
        mileage: '20000'
    },
    {
        model: 'Kia',
        year: '2022',
        image: 'https://www.kia.com/content/dam/kwcms/kme/global/en/assets/vehicles/ev6/discover/kia_ev6_carousel_exterior_03_1160x653.jpg',
        fuel: 'Hybrid',
        mileage: '1500'
    }];

function getAll() {
    return carDb.slice();
}


function create(model, year, image, fuel, mileage) {
    let car = new Car(model, year, image, fuel, mileage);
    carDb.push(car);
}

const carService = {
    create,
    getAll
};
export default carService;