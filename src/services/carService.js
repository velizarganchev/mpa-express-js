import Car from '../Models/carModel.js'


function getAll() {
    return Car.getAll().slice();
}

function getOne(carId) {
    return Car.cars.find(x => x.id  == carId);
}

function create(model, year, image, fuel, mileage) {
    let car = new Car(model, year, image, fuel, mileage);
    Car.add(car);
}

const carService = {
    create,
    getAll,
    getOne
};
export default carService;