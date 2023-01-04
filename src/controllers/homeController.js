import express from 'express';
import carService from '../services/carService.js';

const router = express.Router();

function home(req, res) {
    let cars = carService.getAll();
    res.render('index', { cars });
}

router.get('/', home);

export default router;