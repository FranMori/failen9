const express = require ('express')
const router = express.Router()
const matchupsMidCtrl = require ('../../controllers/matchups/mid')


router.get('/matchups/mid/getAllScrim', matchupsMidCtrl.getAllScrim)
router.get('/matchups/mid/getAllOtf1', matchupsMidCtrl.getAllOtf1)
router.get('/matchups/mid/getAllPrepaOtf2', matchupsMidCtrl.getAllPrepaOtf2)

router.get('/matchups/mid/getWinScrim', matchupsMidCtrl.getWinScrim)
router.get('/matchups/mid/getWinOtf1', matchupsMidCtrl.getWinOtf1)
router.get('/matchups/mid/getWinPrepaOtf2', matchupsMidCtrl.getWinPrepaOtf2)



module.exports = router