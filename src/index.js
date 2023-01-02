import express from 'express';
import inithandlebars from './config/handlebars.js';
import path from 'path';


const app = express();

inithandlebars(app);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(5000, console.log.bind(console, 'Application is running on http//localhost:5000'));

