import express from 'express';

const router = express.Router();

function createCar (req, res) {
    res.render('create');
}

router.get('/create', createCar);

export default router;