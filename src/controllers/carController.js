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

router.get('/create', getcreateCarPage);
router.post('/create', createCar)

export default router;