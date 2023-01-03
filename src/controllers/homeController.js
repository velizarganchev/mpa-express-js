import express from 'express';
import carService from '../services/carService.js';

const router = express.Router();

function home(req, res) {
    let cars = carService.getAll();
    console.log(cars);

    res.render('index');
}

router.get('/', home);

export default router;