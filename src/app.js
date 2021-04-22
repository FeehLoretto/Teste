import express from 'express';
import routes from './routes';

import './database/index';

class App {
    constructor() {
        this.server = express();

        this.server.post('/');
    }

    middleware() {
        this.server.use(express,json());

    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;