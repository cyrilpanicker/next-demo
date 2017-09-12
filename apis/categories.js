const { Router } = require('express');
const mockData = require('./mockData.json');

const router = Router();

router.get('/categories/:id',function(request,response){
    const categoryResults = mockData.categories.filter(category => category.id == request.params['id']);
    if(!categoryResults.length){
        response.status(400).send();
    }else{
        response.send({
            categories:mockData.categories.map(category => {
                return {
                    id:category.id,
                    name:category.name
                };
            }),
            selectedCategory:mockData.categories.filter(category => category.id == request.params['id'])[0]
        });
    }
});

module.exports = router;