const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const nextMiddleware = app.getRequestHandler();
const server = express();

app.prepare().then(() => {
    server.get('/post/:id',(request,response) => {
        app.render(request,response,'/post',{
            id:request.params.id
        });
    });
    server.use(nextMiddleware);
    server.listen(8000, error => {
        if(error){
            throw error;
        }else{
            console.log('app running on http://localhost:8000');
        }
    });
},error => {
    console.log(error.stack);
    process.exit(1);
});