const mysql = require('mysql');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('dokan', 'root', 'admin@amarmistri@ennvisio', {
        host: 'localhost',
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    })
;
// const dotenv = require('dotenv');
// dotenv.load({path: '.env'});

module.exports = sequelize;
