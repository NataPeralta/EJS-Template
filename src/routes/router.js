const controller = require('./../controllers/controller')

const express = require('express');
const router = express.Router();

router.get('/', controller.persons )

router.get('/person/:id', controller.matchById )


module.exports = router;