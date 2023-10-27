const express =  require('express');
const controllers = require('../controller/logics.js')
const router = express.Router();
router.get('/home',controllers.homePage)

router.get('/register',controllers.checkData)
router.post('/register',controllers.checkpostData)


router.get('/login',controllers.loginPage)
router.post('/login',controllers.loginpostPage)

module.exports = router;