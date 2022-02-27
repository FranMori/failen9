const express = require ('express')
const router = express.Router()
const matchupsSupCtrl = require ('../../controllers/matchups/sup')


router.get('/matchups/sup/getAllScrim', matchupsSupCtrl.getAllScrim)
router.get('/matchups/sup/getAllOtf1', matchupsSupCtrl.getAllOtf1)
router.get('/matchups/sup/getAllPrepaOtf2', matchupsSupCtrl.getAllPrepaOtf2)

router.get('/matchups/sup/getWinScrim', matchupsSupCtrl.getWinScrim)
router.get('/matchups/sup/getWinOtf1', matchupsSupCtrl.getWinOtf1)
router.get('/matchups/sup/getWinPrepaOtf2', matchupsSupCtrl.getWinPrepaOtf2)



module.exports = router