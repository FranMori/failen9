const Sequelize = require('sequelize')

const sequelize = new Sequelize ('F9', 'root', 'bouftou80', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = sequelize