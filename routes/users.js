var express = require('express');
var router = express.Router();
const userContoller = require('../controllers/user.controllers');
/* GET users listing. */
router.get('/allusers',userContoller.getallUsers);

router.post('/create',userContoller.createUser);
router.post('/update', userContoller.updateUser);
router.post('/delete', userContoller.deleteUser);
module.exports = router;
