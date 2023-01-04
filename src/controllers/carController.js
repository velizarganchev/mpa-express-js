import express from 'express';
import carService from '../services/carService.js';

const router = express.Router();

function getcreateCarPage(req, res) {
    res.render('create');
}

function createCar(req, res) {

    let { model, year, image, fuel, mileage } = req.body;
    carService.create(model, year, image, fuel, mileage);

    res.redirect('/');
}

function getDetailsCarPage(req, res) {

    let car = carService.getOne(req.params.carId);
    console.log(car);
    res.render('details', {car});
}

router.get('/create', getcreateCarPage);
router.post('/create', createCar)
router.get('/:carId', getDetailsCarPage)

export default router;