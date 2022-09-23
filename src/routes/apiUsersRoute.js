const express = require('express');
const router = express.Router();
const controller = require ("../controllers/apiUsersController")


router.get('/', controller.listAll);

router.get('/:id', controller.edit)
module.exports = router;