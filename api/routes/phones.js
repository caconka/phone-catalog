const express = require('express');
const phoneController = require('../controllers/phones');
const phonesMiddleware = require('../middlewares/phones');

const router = express.Router();

router.get('/', phoneController.list);
router.get('/:id', phonesMiddleware.checkValidId, phoneController.findById);

module.exports = router;
