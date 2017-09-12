const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const server = express();
const routes = require('./routes');
const apis = require('./apis');
const nextMiddleware = routes.getRequestHandler(app);

app.prepare().then(() => {
    server.use(bodyParser.json());
    server.use('/api',apis);
    server.use(nextMiddleware);
    server.listen(8080, error => {
        if(error){
            throw error;
        }else{
            console.log('app running on http://localhost:8080');
        }
    });
},error => {
    console.log(error.stack);
    process.exit(1);
});