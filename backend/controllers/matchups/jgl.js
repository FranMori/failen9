const Scrim = require ('../../models/scrim')
const Otf1 = require ('../../models/otf1')
const prepaOtf2 = require ('../../models/prepaotf2')


// All enemy picks

const getAllScrim = async (req, res) => {
 Scrim.findAll({
    attributes: ['EPick2', 'Pick2']
  })
  .then(JglScrim => res.status(200).json(JglScrim))
  .catch(error => res.status(400).json({error}))

}
const getAllOtf1 = async (req, res) => {
  Otf1.findAll({
    attributes: ['EPick2', 'Pick2']
  })
  .then(JglOtf1 => res.status(200).json(JglOtf1))
  .catch(error => res.status(400).json({error}))
}

const getAllPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    attributes: ['EPick2', 'Pick2']
  })
  .then(JglPrepaOtf2 => res.status(200).json(JglPrepaOtf2))
  .catch(error => res.status(400).json({error}))

}

// All wins vs enemy picks

const getWinScrim = async (req, res) => {
  Scrim.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick2', 'Pick2']
  })
  .then(JglWinScrim => res.status(200).json(JglWinScrim))
  .catch(error => res.status(400).json({error}))
}

const getWinOtf1 = async (req, res) => {
  Otf1.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick2', 'Pick2']
  })
  .then(JglWinOtf1 => res.status(200).json(JglWinOtf1))
  .catch(error => res.status(400).json({error}))
}

const getWinPrepaOtf2 = async (req, res) => {
  prepaOtf2.findAll({
    where : {Result : 'Victoire'},
    attributes : ['EPick2', 'Pick2']
  })
  .then(JglWinPrepaOtf2 => res.status(200).json(JglWinPrepaOtf2))
  .catch(error => res.status(400).json({error}))
}


module.exports = {
  getAllScrim, getAllOtf1, getAllPrepaOtf2, getWinScrim, getWinOtf1, getWinPrepaOtf2,
}