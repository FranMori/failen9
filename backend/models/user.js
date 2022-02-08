const Sequelize = require ('sequelize')
const sequelize = require ('../utils/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNul: false,
    primaryKey: true,
  },
  pseudo: {
    type:Sequelize.STRING,
    allowNul: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  staff: {
    type: Sequelize.BOOLEAN,
  }

})

module.exports = User