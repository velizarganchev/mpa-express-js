import express from 'express';
import inithandlebars from './config/handlebars.js';
import routes from './routes.js'

const app = express();

app.use(express.urlencoded({extended: true}));
inithandlebars(app);

app.use(express.static('./src/public'));
app.use(routes)

app.listen(5000, console.log.bind(console, 'Application is running on http//localhost:5000'));

