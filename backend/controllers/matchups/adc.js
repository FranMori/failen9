const Scrim = require ('../../models/scrim')
const Otf1 = require ('../../models/otf1')
const prepaOtf2 = require ('../../models/prepaotf2')


// All enemy picks

const getAllScrim = async (req, res) => {
 Scrim.findAll({
    attributes: ['EPick4', 'Pick4']
  })
  .then(AdcScrim => res.status(200).json(AdcScrim))
  .catch(error => res.status(400).json({error}))

}
const getAllOtf1 = async (req, res) => {
  Otf1.findAll({
    attributes: ['EPick4', 'Pick4']
  })
  .then(AdcOtf1 => res.status(200).json(AdcOtf1))
  .catch(error => res.status(400).json({error}))
}

const getAllPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    attributes: ['EPick4', 'Pick4']
  })
  .then(AdcPrepaOtf2 => res.status(200).json(AdcPrepaOtf2))
  .catch(error => res.status(400).json({error}))

}

// All wins vs enemy picks

const getWinScrim = async (req, res) => {
  Scrim.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick4', 'Pick4']
  })
  .then(AdcWinScrim => res.status(200).json(AdcWinScrim))
  .catch(error => res.status(400).json({error}))
}

const getWinOtf1 = async (req, res) => {
  Otf1.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick4', 'Pick4']
  })
  .then(AdcWinOtf1 => res.status(200).json(AdcWinOtf1))
  .catch(error => res.status(400).json({error}))
}

const getWinPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick4', 'Pick4']
  })
  .then(AdcWinPrepaOtf2 => res.status(200).json(AdcWinPrepaOtf2))
  .catch(error => res.status(400).json({error}))
}


module.exports = {
  getAllScrim, getAllOtf1, getAllPrepaOtf2, getWinScrim, getWinOtf1, getWinPrepaOtf2,
}