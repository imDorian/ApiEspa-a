const express = require('express');
const {getAllPaises, postPais, putPais, deletePais} = require('../controllers/pais.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/',[isAuth], getAllPaises);
router.post('/',[isAuth],postPais);
router.put('/:id',[isAuth],putPais);
router.delete('/:id',[isAuth],deletePais);

module.exports = router;