import Car from '../Models/carModel.js'

const carDb = [];

function getAll() {
    return Car.getAll().slice();
}


function create(model, year, image, fuel, mileage) {
    let car = new Car(model, year, image, fuel, mileage);
    Car.add(car);
}

const carService = {
    create,
    getAll
};
export default carService;