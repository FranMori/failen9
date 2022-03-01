
const Sequelize = require('sequelize')

const sequelize = new Sequelize ('heroku_f15694e4d3d9e2c', 'b61a4949d98783', 'eb75d6cd', {
  host: 'us-cdbr-east-05.cleardb.net',
  dialect: 'mysql'
})

module.exports = sequelize