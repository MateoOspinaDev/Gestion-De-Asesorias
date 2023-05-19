const { Router } = require('express')
const {createTipoProyecto, getTipoProyecto, updateTipoProyectoByID} =
 require('../controllers/tipoProyecto')

const router = Router()

router.post('/', createTipoProyecto)

router.get('/', getTipoProyecto)

router.put('/:id', updateTipoProyectoByID)

module.exports = router;