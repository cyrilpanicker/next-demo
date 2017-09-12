const routes = require('next-routes')();
routes.add('/','index');
routes.add('/confirmation','confirmation');
routes.add('/checkout','checkout');
routes.add('/wishlist','wishlist');
routes.add('/products/:productId','product');
routes.add('/:categoryLevel1','categories');
routes.add('/:categoryLevel1/:categoryLevel2','categories');
routes.add('/:categoryLevel1/:categoryLevel2/:categoryLevel3','categories');
module.exports = routes;