const Scrim = require ('../../models/scrim')
const Otf1 = require ('../../models/otf1')
const prepaOtf2 = require ('../../models/prepaotf2')


// All enemy picks
const getAllScrim = async (req, res) => {
 Scrim.findAll({
    attributes: ['EPick1']
  })
  .then(topScrim => res.status(200).json([topScrim]))
  .catch(error => res.status(400).json({error}))

}
const getAllOtf1 = async (req, res) => {
  Otf1.findAll({
    attributes: ['EPick1']
  })
  .then(topOtf1 => res.status(200).json([topOtf1]))
  .catch(error => res.status(400).json({error}))
}

const getAllPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    attributes: ['EPick1']
  })
  .then(topPrepaOtf2 => res.status(200).json([topPrepaOtf2]))
  .catch(error => res.status(400).json({error}))

}

// All wins vs enemy picks

const getWinScrim = async (req, res) => {
  Scrim.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick1']
  })
  .then(topWinScrim => res.status(200).json([topWinScrim]))
  .catch(error => res.status(400).json({error}))
}

const getWinOtf1 = async (req, res) => {
  Otf1.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick1']
  })
  .then(topWinOtf1 => res.status(200).json([topWinOtf1]))
  .catch(error => res.status(400).json({error}))
}

const getWinPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick1']
  })
  .then(topWinPrepaOtf2 => res.status(200).json([topWinPrepaOtf2]))
  .catch(error => res.status(400).json({error}))
}


module.exports = {
  getAllScrim, getAllOtf1, getAllPrepaOtf2, getWinScrim, getWinOtf1, getWinPrepaOtf2,
}