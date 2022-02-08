const express = require ('express')
const router = express.Router()
const prepaotf2Ctrl = require ('../controllers/prepaotf2')

router.post('/team/prepaotf2/create', prepaotf2Ctrl.create)

router.get('/team/prepaotf2/getAll', prepaotf2Ctrl.getAll)
router.get('/team/prepaotf2/getBlue', prepaotf2Ctrl.getBlue)
router.get('/team/prepaotf2/getRed', prepaotf2Ctrl.getRed)



router.get ('/team/prepaotf2/getWinrate', prepaotf2Ctrl.getWinrate)
router.get ('/team/prepaotf2/getWinrateBlue', prepaotf2Ctrl.getWinrateBlue)
router.get ('/team/prepaotf2/getWinrateRed', prepaotf2Ctrl.getWinrateRed)

router.get ('/team/prepaotf2/getHerald', prepaotf2Ctrl.getHerald)
router.get ('/team/prepaotf2/getHeraldBlue', prepaotf2Ctrl.getHeraldBlue)
router.get ('/team/prepaotf2/getHeraldRed', prepaotf2Ctrl.getHeraldRed)


router.get ('/team/prepaotf2/getDrake', prepaotf2Ctrl.getDrake)
router.get ('/team/prepaotf2/getDrakeBlue', prepaotf2Ctrl.getDrakeBlue)
router.get ('/team/prepaotf2/getDrakeRed', prepaotf2Ctrl.getDrakeRed)




module.exports = router