const Comunidad = require('../model/comunidades');

const getAllComunidades = async (req, res, next) => {
    try {
        const comunidades = await Comunidad.find().populate("");
        return res.status(200).json(comunidades);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}


const postComunidad = async (req, res, next) => {
    try {
        const newComunidad = new Comunidad(req.body);
        const createdComunidad = await newComunidad.save();
        return res.status(200).json(createdComunidad) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putComunidad = async (req, res, next) => {
    try {
        const {id} = req.params;
        const comunidad = new Comunidad(req.body)
        comunidad._id = id;
        const newComunidad = await Comunidad.findByIdAndUpdate(id,comunidad, {new:true})
        return res.status(201).json(newComunidad)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteComunidad = async (req, res, next) => {
    try {
        const {id} = req.params;
        const comunidad = await Comunidad.findByIdAndDelete(id)
        return res.status(200).json("Comunidad borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllComunidades, postComunidad, putComunidad, deleteComunidad}