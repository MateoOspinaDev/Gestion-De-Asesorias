const Universidad = require('../models/universidad')
const { request, response} = require('express')

const createUniversidad = async (req = request, 
    res = response) => {
    try{
        const nombre = req.body.nombre 
            ? req.body.nombre.toUpperCase()
            : ''
        const direccion = req.body.direccion 
            ? req.body.direccion.toUpperCase()
            : ''
        const telefono = req.body.telefono 
            ? req.body.telefono.toUpperCase()
            : ''
        const universidadDB = await Universidad.findOne({nombre})
        
        if(universidadDB){
            return res.status(400).json({msg: 'Ya existe'})
        }
        const data = {
            nombre,
            direccion,
            telefono
        }
        const universidad = new Universidad(data)
        await universidad.save()
        return res.status(201).json(universidad)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getUniversidad = async (req = request, 
    res = response) => {
        try{
            const universidadDB = await Universidad.find()
            return res.json(universidadDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

const updateUniversidadByID = async (req = request, res = response) => {
    try {
      const id = req.params.id;
      const data = req.body;
      data.fechaActualizacion = new Date();
  
      const universidad = await Universidad.findByIdAndUpdate(id, data, { new: true });
  
      if (!universidad) {
        return res.status(404).json({ msg: 'Universidad no encontrada' });
      }
  
      return res.json(universidad);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ msg: 'Error general ' + e });
    }
  };

module.exports = { 
    createUniversidad, 
    getUniversidad,
    updateUniversidadByID
}