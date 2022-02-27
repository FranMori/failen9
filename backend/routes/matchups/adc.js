const express = require ('express')
const router = express.Router()
const matchupsAdcCtrl = require ('../../controllers/matchups/adc')


router.get('/matchups/adc/getAllScrim', matchupsAdcCtrl.getAllScrim)
router.get('/matchups/adc/getAllOtf1', matchupsAdcCtrl.getAllOtf1)
router.get('/matchups/adc/getAllPrepaOtf2', matchupsAdcCtrl.getAllPrepaOtf2)

router.get('/matchups/adc/getWinScrim', matchupsAdcCtrl.getWinScrim)
router.get('/matchups/adc/getWinOtf1', matchupsAdcCtrl.getWinOtf1)
router.get('/matchups/adc/getWinPrepaOtf2', matchupsAdcCtrl.getWinPrepaOtf2)



module.exports = router