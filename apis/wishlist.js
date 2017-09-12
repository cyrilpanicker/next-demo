const { Router } = require('express');
const mockData = require('./mockData.json');

const router = Router();

router.get('/wishlist',function(request,response){
    response.send({
        categories:mockData.categories
    });
});

module.exports = router;