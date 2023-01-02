import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();

app.engine('hbs', engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('./src/views'));

app.get('/', (req, res) => {
    res.render('index', {layout: false});
});

app.listen(5000, console.log.bind(console, 'Application is running on http//localhost:5000'));

