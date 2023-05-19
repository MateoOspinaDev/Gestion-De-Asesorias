const Etapa = require('../models/etapa')
const { request, response} = require('express')

const createEtapa = async (req = request,
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const etapaDB = await Etapa.findOne({nombre})
        
        if(etapaDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre
        }
        const etapa = new Etapa(data)
        await etapa.save()
        return res.status(201).json(etapa)  
    }catch(e){
        return res.status(500).json({msg: e})  
    }
}

const getEtapas = async (req = request,
    res = response) => {
    try{
        const etapasDB = await Etapa.find()
        return res.json(etapasDB)

    }catch(e){
        return res.status(500).json({msg: e})  
    }
}

const updateEtapaByID = async (req = request,
    res = response) => {
        try{
            const data = req.body
            const id = req.params.id
            data.fechaActualizacion = new Date()
            const etapa = await Etapa.findByIdAndUpdate(id, data, {new: true})
            return res.json(etapa)
        }catch(e){
            console.log(e)
            return res.status(500).json({msg: e})  
        }
}

module.exports = {
    createEtapa,
    getEtapas,
    updateEtapaByID
}