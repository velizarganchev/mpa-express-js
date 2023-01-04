import express from 'express';
import carService from '../services/carService.js';

const router = express.Router();

function home(req, res) {
    let cars = carService.getAll();
    res.render('index', { cars });
}
function about(req, res) {
    res.render('about');
}

router.get('/', home);
router.get('/about', about);

export default router;