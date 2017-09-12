const { Router } = require('express');
const mockData = require('./mockData.json');

const router = Router();

router.get('/home',function(request,response){
    response.send({
        categories:mockData.categories,
        images:mockData.sliderImages
    });
});

module.exports = router;