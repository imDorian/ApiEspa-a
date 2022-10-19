const express = require('express');
const {getAllComunidades, postComunidad, putComunidad, deleteComunidad} = require('../controllers/comunidades.controllers');
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.get('/', getAllComunidades);
router.post('/',[isAuth],  postComunidad);
router.put('/:id',[isAuth],putComunidad);
router.delete('/:id',[isAuth], deleteComunidad);

module.exports = router;