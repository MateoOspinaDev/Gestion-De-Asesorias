const { Router } = require('express')
const { createTipoProyecto, getInventarios} =
 require('../controllers/inventario')

const router = Router()

// crear
router.post('/', createTipoProyecto)

// consultar todos
router.get('/', getInventarios)

module.exports = router;