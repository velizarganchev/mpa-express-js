import express from 'express';

const router = express.Router();

function home (req, res) {
    res.render('index');
}

router.get('/', home);

export default router;