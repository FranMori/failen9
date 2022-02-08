const express = require ('express')
const router = express.Router()
const otf1Ctrl = require ('../controllers/otf1')

router.post('/team/otf1/create', otf1Ctrl.create)

router.get('/team/otf1/getAll', otf1Ctrl.getAll)
router.get('/team/otf1/getBlue', otf1Ctrl.getBlue)
router.get('/team/otf1/getRed', otf1Ctrl.getRed)



router.get ('/team/otf1/getWinrate', otf1Ctrl.getWinrate)
router.get ('/team/otf1/getWinrateBlue', otf1Ctrl.getWinrateBlue)
router.get ('/team/otf1/getWinrateRed', otf1Ctrl.getWinrateRed)

router.get ('/team/otf1/getHerald', otf1Ctrl.getHerald)
router.get ('/team/otf1/getHeraldBlue', otf1Ctrl.getHeraldBlue)
router.get ('/team/otf1/getHeraldRed', otf1Ctrl.getHeraldRed)


router.get ('/team/otf1/getDrake', otf1Ctrl.getDrake)
router.get ('/team/otf1/getDrakeBlue', otf1Ctrl.getDrakeBlue)
router.get ('/team/otf1/getDrakeRed', otf1Ctrl.getDrakeRed)




module.exports = router