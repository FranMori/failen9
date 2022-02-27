const express = require ('express')
const router = express.Router()
const matchupsJglCtrl = require ('../../controllers/matchups/jgl')

router.get('/matchups/jgl/getAllScrim', matchupsJglCtrl.getAllScrim)
router.get('/matchups/jgl/getAllOtf1', matchupsJglCtrl.getAllOtf1)
router.get('/matchups/jgl/getAllPrepaOtf2', matchupsJglCtrl.getAllPrepaOtf2)

router.get('/matchups/jgl/getWinScrim', matchupsJglCtrl.getWinScrim)
router.get('/matchups/jgl/getWinOtf1', matchupsJglCtrl.getWinOtf1)
router.get('/matchups/jgl/getWinPrepaOtf2', matchupsJglCtrl.getWinPrepaOtf2)


module.exports = router