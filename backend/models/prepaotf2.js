const { INTEGER } = require('sequelize')
const Sequelize = require ('sequelize')
const sequelize = require ('../utils/database')

const Prepaotf2 = sequelize.define('prepaotf2', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNul: false,
    primaryKey: true,
  },

  // Drake et herald

  firstDrake : {
    type: Sequelize.STRING,
    allowNul: false,
  },
  firstHerald : {
    type: Sequelize.STRING,
    allowNul: false,
  },

  // Infos
  Date: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  enemyTeam: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  Side: {
    type: Sequelize.STRING,
    allowNul: false,
  },
  Duration: {
    type: Sequelize.STRING,
    allowNul: false,
  },

  Result: {
    type: Sequelize.STRING,
    allowNul: false
  },

  Draft: {
    type: Sequelize.STRING,
    allowNul: false
  },

  
//  Bans
  Ban1: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Ban2: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Ban3: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Ban4: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Ban5: {
    type: Sequelize.STRING,
    allowNul: false
  },
  // Picks
  Pick1: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Pick2: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Pick3: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Pick4: {
    type: Sequelize.STRING,
    allowNul: false
  },
  Pick5: {
    type: Sequelize.STRING,
    allowNul: false
  },
  // KDA
  KDA1: {
    type: Sequelize.STRING,
    allowNul: false
  },
  KDA2: {
    type: Sequelize.STRING,
    allowNul: false
  },
  KDA3: {
    type: Sequelize.STRING,
    allowNul: false
  },
  KDA4: {
    type: Sequelize.STRING,
    allowNul: false
  },
  KDA5: {
    type: Sequelize.STRING,
    allowNul: false
  },
    // CS
  CS1: {
    type: INTEGER,
    allowNul:false
  },
  CS2: {
    type: INTEGER,
    allowNul:false
  },
  CS3: {
    type: INTEGER,
    allowNul:false
  },
  CS4: {
    type: INTEGER,
    allowNul:false
  },
  CS5: {
    type: INTEGER,
    allowNul:false
  },
// Dégats
  Degat1 : {
    type: INTEGER,
    allowNul:false
    },
  Degat2 : {
    type: INTEGER,
    allowNul:false
    },
  Degat3 : {
    type: INTEGER,
    allowNul:false
    },
  Degat4 : {
    type: INTEGER,
    allowNul:false
    },
  Degat5 : {
    type: INTEGER,
    allowNul:false
    },
// GoldTotal
  Gold1 : {
    type: INTEGER,
    allowNul: false
  },
  Gold2 : {
    type: INTEGER,
    allowNul: false
  },
  Gold3 : {
    type: INTEGER,
    allowNul: false
  },
  Gold4 : {
    type: INTEGER,
    allowNul: false
  },
  Gold5 : {
    type: INTEGER,
    allowNul: false
  },


//  GoldDiff
  GoldDiff1_8: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff2_8: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff3_8: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff4_8: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff5_8: {
    type: Sequelize.STRING,
    allowNul: false
  },

  GoldDiff1_14: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff2_14: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff3_14: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff4_14: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff5_14: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff1_22: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff2_22: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff3_22: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff4_22: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff5_22: {
    type: Sequelize.STRING,
    allowNul: false
  },  
  GoldDiff1: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff2: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff3: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff4: {
    type: Sequelize.STRING,
    allowNul: false
  },
  GoldDiff5: {
    type: Sequelize.STRING,
    allowNul: false
  },

  // Vision

  Pink1: {
    type: INTEGER,
    allowNul: false
  },
  Pink2: {
    type: INTEGER,
    allowNul: false
  },
  Pink3: {
    type: INTEGER,
    allowNul: false
  },
  Pink4: {
    type: INTEGER,
    allowNul: false
  },
  Pink5: {
    type: INTEGER,
    allowNul: false
  },

  Vision1 : {
    type: INTEGER,
    allowNul: false
  },

  Vision2 : {
    type: INTEGER,
    allowNul: false
  },

  Vision3 : {
    type: INTEGER,
    allowNul: false
  },

  Vision4 : {
    type: INTEGER,
    allowNul: false
  },

  Vision5 : {
    type: INTEGER,
    allowNul: false
  },

  // ENEMY TEAM

  // Picks

  EPick1: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EPick2: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EPick3: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EPick4: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EPick5: {
    type: Sequelize.STRING,
    allowNul: false
  },
  // Bans
  EBan1: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EBan2: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EBan3: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EBan4: {
    type: Sequelize.STRING,
    allowNul: false
  },
  EBan5: {
    type: Sequelize.STRING,
    allowNul: false
  },
})

module.exports = Prepaotf2