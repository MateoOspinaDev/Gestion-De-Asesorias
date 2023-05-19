const { Router } = require('express')

const {
    createEtapa,
    getEtapas,
    updateEtapaByID
} = require('../controllers/etapa')

const router = Router()

router.post('/', createEtapa)

router.get('/', getEtapas)

router.put('/:id', updateEtapaByID)

module.exports = router;
