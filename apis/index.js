const { Router } = require('express');

const home = require('./home');
const wishlist = require('./wishlist');

const router = Router();

router.use(home);
router.use(wishlist);

module.exports = router;