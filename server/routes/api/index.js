'use strict';
let express = require('express');

let router = express.Router();
let carRoute = require('./carRoutes');
let productRoutes = require('./productRoutes');


/* GET  listing. */

router.use('/car/', carRoute);
router.use('/product/', productRoutes);


module.exports = router;
