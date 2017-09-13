const { Router } = require('express');

const home = require('./home');
const categories = require('./categories');
const product = require('./product');
const wishlist = require('./wishlist');

const router = Router();

router.use(home);
router.use(categories);
router.use(product);
router.use(wishlist);

module.exports = router;