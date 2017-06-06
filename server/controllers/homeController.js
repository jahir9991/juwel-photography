/**
 * homeController.js
 *
 * @description :: Server-side logic for managing home.
 */
const carModel = require('../models/carModel');
export  default {
    /**
     * carController.list()
     */
    index: (req, res) => {
        let cars = [];
        carModel.find((err, carsFrom) => {
            cars = carsFrom;
        }).then(() => {
            "use strict";
            res.render('index', {
                cars: cars
            });
            console.log('hi1')
        }).then(() => {
            console.log('hi2')

        });

    }


};
