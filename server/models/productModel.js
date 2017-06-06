const Sequelize = require('sequelize');
const sequelize = new Sequelize('dokan', 'root', 'admin@amarmistri@ennvisio', {
    host: 'localhost',
    dialect: 'mysql'
});

var Product = sequelize.define('Product', {
    title: Sequelize.STRING,
    desc: Sequelize.TEXT
})
sequelize.sync();

module.exports = Product;

