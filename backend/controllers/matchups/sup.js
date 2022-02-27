const Scrim = require ('../../models/scrim')
const Otf1 = require ('../../models/otf1')
const prepaOtf2 = require ('../../models/prepaotf2')


// All enemy picks

const getAllScrim = async (req, res) => {
 Scrim.findAll({
    attributes: ['EPick5', 'Pick5']
  })
  .then(supScrim => res.status(200).json(supScrim))
  .catch(error => res.status(400).json({error}))

}
const getAllOtf1 = async (req, res) => {
  Otf1.findAll({
    attributes: ['EPick5', 'Pick5']
  })
  .then(supOtf1 => res.status(200).json(supOtf1))
  .catch(error => res.status(400).json({error}))
}

const getAllPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    attributes: ['EPick5', 'Pick5']
  })
  .then(supPrepaOtf2 => res.status(200).json(supPrepaOtf2))
  .catch(error => res.status(400).json({error}))

}

// All wins vs enemy picks

const getWinScrim = async (req, res) => {
  Scrim.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick5', 'Pick5']
  })
  .then(supWinScrim => res.status(200).json(supWinScrim))
  .catch(error => res.status(400).json({error}))
}

const getWinOtf1 = async (req, res) => {
  Otf1.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick5', 'Pick5']
  })
  .then(supWinOtf1 => res.status(200).json(supWinOtf1))
  .catch(error => res.status(400).json({error}))
}

const getWinPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick5', 'Pick5']
  })
  .then(supWinPrepaOtf2 => res.status(200).json(supWinPrepaOtf2))
  .catch(error => res.status(400).json({error}))
}


module.exports = {
  getAllScrim, getAllOtf1, getAllPrepaOtf2, getWinScrim, getWinOtf1, getWinPrepaOtf2,
}