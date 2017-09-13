const { Router } = require('express');
const mockData = require('./mockData.json');

const products = mockData.categories.reduce((result,category) => {
    category.products.forEach(product => result.push(product));
    return result;
},[]);

const router = Router();

router.get('/products/:id',function(request,response){
    const productResults = products.filter(product => product.id == request.params['id']);
    if(!productResults.length){
        response.status(400).send();
    }else{
        response.send({
            categories:mockData.categories.map(category => {
                return {
                    id:category.id,
                    name:category.name
                };
            }),
            selectedProduct:productResults[0]
        });
    }
});

module.exports = router;