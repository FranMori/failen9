const express = require ('express')
const router = express.Router()
const scrimCtrl = require ('../controllers/scrims')

router.post('/scrim/create', scrimCtrl.create)

router.get('/scrim/getAll', scrimCtrl.getAll)
router.get('/scrim/getBlue', scrimCtrl.getBlue)
router.get('/scrim/getRed', scrimCtrl.getRed)



router.get ('/scrim/getWinrate', scrimCtrl.getWinrate)
router.get ('/scrim/getWinrateBlue', scrimCtrl.getWinrateBlue)
router.get ('/scrim/getWinrateRed', scrimCtrl.getWinrateRed)

router.get ('/scrim/getHerald', scrimCtrl.getHerald)
router.get ('/scrim/getHeraldBlue', scrimCtrl.getHeraldBlue)
router.get ('/scrim/getHeraldRed', scrimCtrl.getHeraldRed)


router.get ('/scrim/getDrake', scrimCtrl.getDrake)
router.get ('/scrim/getDrakeBlue', scrimCtrl.getDrakeBlue)
router.get ('/scrim/getDrakeRed', scrimCtrl.getDrakeRed)





module.exports = router