import { engine } from 'express-handlebars';
import path from 'path';

function initHandlebars(app) {
    app.engine('hbs', engine({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');
    app.set('views', path.resolve('./src/views'));
}

export default initHandlebars;