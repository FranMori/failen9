const Otf1 = require ('../models/otf1')

// Post Otf1

const create = async (req, res) => {
  Otf1.create({
    
    firstDrake : req.body.firstDrake,
    firstHerald : req.body.firstHerald,


    Date: req.body.date,
    enemyTeam: req.body.enemyTeam,
    Side: req.body.side,
    Duration: req.body.duration,
    Result: req.body.result,

    Ban1: req.body.ban1,
    Ban2: req.body.ban2,
    Ban3: req.body.ban3,
    Ban4: req.body.ban4,
    Ban5: req.body.ban5,

    Pick1: req.body.pick1,
    Pick2: req.body.pick2,
    Pick3: req.body.pick3,
    Pick4: req.body.pick4,
    Pick5: req.body.pick5,

    KDA1 : req.body.kda1,
    KDA2 : req.body.kda2,
    KDA3 : req.body.kda3,
    KDA4 : req.body.kda4,
    KDA5 : req.body.kda5,

    CS1 : req.body.cs1,
    CS2 : req.body.cs2,
    CS3 : req.body.cs3,
    CS4 : req.body.cs4,
    CS5 : req.body.cs5,

    Degat1 : req.body.degat1,
    Degat2 : req.body.degat2,
    Degat3 : req.body.degat3,
    Degat4 : req.body.degat4,
    Degat5 : req.body.degat5,

    Gold1 : req.body.gold1,
    Gold2 : req.body.gold2,
    Gold3 : req.body.gold3,
    Gold4 : req.body.gold4,
    Gold5 : req.body.gold5,

    GoldDiff1: req.body.golddiff1,
    GoldDiff2: req.body.golddiff2,
    GoldDiff3: req.body.golddiff3,
    GoldDiff4: req.body.golddiff4,
    GoldDiff5: req.body.golddiff5,

    Pink1 : req.body.pink1,
    Pink2 : req.body.pink2,
    Pink3 : req.body.pink3,
    Pink4 : req.body.pink4,
    Pink5 : req.body.pink5,

    Vision1 : req.body.vision1,
    Vision2 : req.body.vision2,
    Vision3 : req.body.vision3,
    Vision4 : req.body.vision4,
    Vision5 : req.body.vision5,


    // ENEMY TEAM


    EPick1: req.body.epick1,
    EPick2: req.body.epick2,
    EPick3: req.body.epick3,
    EPick4: req.body.epick4,
    EPick5: req.body.epick5,

    EBan1 : req.body.eban1,
    EBan2 : req.body.eban2,
    EBan3 : req.body.eban3,
    EBan4 : req.body.eban4,
    EBan5 : req.body.eban5,
  })
  .then(otf1 => res.status(200).json(otf1))
  .catch(error => res.status(400).json({error}))
}

// getAll

const getAll = async (req, res) => {
  Otf1.findAll()
  .then(otf1s => res.status(200).json(otf1s))
  .catch(error => res.status(400).json({error}))
}

const getBlue = async (req, res) => {
  Otf1.findAll({
    where : { side: 'Blue'}
  })
  .then(blue => res.status(200).json(blue.length))
  .catch(error => res.status(400).json({error}))
}

const getRed = async (req, res) => {
  Otf1.findAll({
    where : { side: 'Red'}
  })
  .then(red => res.status(200).json(red.length))
  .catch(error => res.status(400).json({error}))
}

// getWinrate

const getWinrate = async (req,res) => {
  Otf1.findAll({
    where: { Result: 'Victoire'}
  })
  .then(winrate => res.status(200).json(winrate.length))
  .catch(error => res.status(400).json({error}))
}

const getWinrateBlue = async (req,res) => {
  Otf1.findAll({
    where : { result: 'Victoire', side: 'Blue' }
  })
  .then(winrate => res.status(200).json(winrate.length))
  .catch(error => res.status(400).json({error}))
}

const getWinrateRed = async (req,res) => {
  Otf1.findAll({
    where : { result: 'Victoire', side: 'Red' }
  })
  .then(winrate => res.status(200).json(winrate.length))
  .catch(error => res.status(400).json({error}))
}

// getHerald

const getHerald = async (req,res) => {
  Otf1.findAll({
    where: { firstHerald: 'oui'}
  })
  .then(herald => res.status(200).json(herald.length))
  .catch(error => res.status(400).json({error}))
}

const getHeraldBlue = async (req,res) => {
  Otf1.findAll({
    where: { firstHerald: 'oui', side: 'Blue'}
  })
  .then(herald => res.status(200).json(herald.length))
  .catch(error => res.status(400).json({error}))
}

const getHeraldRed = async (req,res) => {
  Otf1.findAll({
    where: { firstHerald: 'oui', side: 'Red'}
  })
  .then(herald => res.status(200).json(herald.length))
  .catch(error => res.status(400).json({error}))
}

// getDrake
const getDrake = async (req,res) => {
  Otf1.findAll({
    where: { firstDrake: 'oui'}
  })
  .then(drake => res.status(200).json(drake.length))
  .catch(error => res.status(400).json({error}))
}

const getDrakeBlue = async (req,res) => {
  Otf1.findAll({
    where: { firstDrake: 'oui', side: 'Blue'}
  })
  .then(drake => res.status(200).json(drake.length))
  .catch(error => res.status(400).json({error}))
}

const getDrakeRed = async (req,res) => {
  Otf1.findAll({
    where: { firstDrake: 'oui', side: 'Red'}
  })
  .then(drake => res.status(200).json(drake.length))
  .catch(error => res.status(400).json({error}))
}

module.exports = {
  create, getAll, getBlue, getRed, getWinrate, getWinrateBlue, getWinrateRed,  getHerald, getHeraldBlue, getHeraldRed, getDrake, getDrakeBlue, getDrakeRed,
}