const express = require ('express')
const router = express.Router()
const matchupsTopCtrl = require ('../../controllers/matchups/top')


router.get('/matchups/top/getAllScrim', matchupsTopCtrl.getAllScrim)
router.get('/matchups/top/getAllOtf1', matchupsTopCtrl.getAllOtf1)
router.get('/matchups/top/getAllPrepaOtf2', matchupsTopCtrl.getAllPrepaOtf2)

router.get('/matchups/top/getWinScrim', matchupsTopCtrl.getWinScrim)
router.get('/matchups/top/getWinOtf1', matchupsTopCtrl.getWinOtf1)
router.get('/matchups/top/getWinPrepaOtf2', matchupsTopCtrl.getWinPrepaOtf2)








module.exports = router