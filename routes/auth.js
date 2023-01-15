const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();



router.post('/login', authController.login);

router.post('/profile', authController.profile);

router.post('/hw', authController.hw);
 
module.exports = router;