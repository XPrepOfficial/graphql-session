// let there be colors
require('colors');
const Logger = require('./utils/Logger');
const Bootstrap = require('./Bootstrap');
const express = require('express');
const http = require('http');
const GraphQLController = require('./GraphQLController');

/**
 * Main App Class. Starting point.
 * */
new class App extends Logger {

    constructor() {
        super();
        this.log('Initializing app...');
        this.boot().then(() => this.log('App Loaded!'));
    }

    async boot() {
        await this.initExpressApp();
        await this.initModels();
        await this.initControllers();
        await this.runBootstrap();
        await this.start();
    }

    async initExpressApp() {
        this.app = express();
    }

    async initModels() {

    }

    async runBootstrap() {
        await new Bootstrap(this.app);
    }

    async initControllers() {
        const router = express.Router();
        new GraphQLController(router);
        this.app.use('/', router);
    }

    async start() {
        let server = http.createServer(this.app);
        server.listen(process.env.NODE_PORT || 3030);
        return new Promise((res, rej) => {
            server.on('listening', () => {
                let addr = server.address();
                let bind = typeof addr === 'string'
                    ? 'pipe ' + addr
                    : 'port ' + addr.port;
                this.log('Listening on ' + bind);
                res();
            });
        });
    }
};
