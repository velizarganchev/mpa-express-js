import express from 'express';
import carController from './controllers/carController.js';
import homeController from './controllers/homeController.js';

const router = express.Router();

router.use(homeController);
router.use('/car', carController);
router.use('*', (req, res) => {
    res.render('404');
});

export default router;