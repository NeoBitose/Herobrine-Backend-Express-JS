const { Sequelize } = require('sequelize');
const config = require('./database'); // Mengambil konfigurasi dari config/database.js

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
  }
);

module.exports = sequelize;
