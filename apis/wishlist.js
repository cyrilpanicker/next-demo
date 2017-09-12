const { Router } = require('express');
const mockData = require('./mockData.json');

const router = Router();

router.get('/wishlist',function(request,response){
    response.send({
        categories:mockData.categories.map(category => {
            return {
                id:category.id,
                name:category.name
            };
        })
    });
});

module.exports = router;