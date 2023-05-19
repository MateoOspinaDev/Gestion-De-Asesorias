const { Router } = require('express')
const {  
    createCliente, 
    getClientes,
    updateClienteByID } =
 require('../controllers/cliente')

const router = Router()

router.post('/', createCliente)

router.get('/', getClientes)

router.put('/:id', updateClienteByID)

module.exports = router;