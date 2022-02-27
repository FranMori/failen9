const Scrim = require ('../../models/scrim')
const Otf1 = require ('../../models/otf1')
const prepaOtf2 = require ('../../models/prepaotf2')


// All enemy picks

const getAllScrim = async (req, res) => {
 Scrim.findAll({
    attributes: ['EPick3', 'Pick3']
  })
  .then(midScrim => res.status(200).json(midScrim))
  .catch(error => res.status(400).json({error}))

}
const getAllOtf1 = async (req, res) => {
  Otf1.findAll({
    attributes: ['EPick3', 'Pick3']
  })
  .then(midOtf1 => res.status(200).json(midOtf1))
  .catch(error => res.status(400).json({error}))
}

const getAllPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    attributes: ['EPick3', 'Pick3']
  })
  .then(midPrepaOtf2 => res.status(200).json(midPrepaOtf2))
  .catch(error => res.status(400).json({error}))

}

// All wins vs enemy picks

const getWinScrim = async (req, res) => {
  Scrim.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick3', 'Pick3']
  })
  .then(midWinScrim => res.status(200).json(midWinScrim))
  .catch(error => res.status(400).json({error}))
}

const getWinOtf1 = async (req, res) => {
  Otf1.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick3', 'Pick3']
  })
  .then(midWinOtf1 => res.status(200).json(midWinOtf1))
  .catch(error => res.status(400).json({error}))
}

const getWinPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick3', 'Pick3']
  })
  .then(midWinPrepaOtf2 => res.status(200).json(midWinPrepaOtf2))
  .catch(error => res.status(400).json({error}))
}


module.exports = {
  getAllScrim, getAllOtf1, getAllPrepaOtf2, getWinScrim, getWinOtf1, getWinPrepaOtf2,
}