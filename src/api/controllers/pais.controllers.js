const Pais = require('../model/pais.model');

const getAllPaises = async (req, res, next) => {
    try {
        const paises = await Pais.find().populate("comunidades");
        return res.status(200).json(paises);
    } catch (error) {
        return res.status(500).json(error) ;
    }
}


const postPais = async (req, res, next) => {
    try {
        const newPais = new Pais(req.body);
        const createdPais = await newPais.save();
        return res.status(200).json(createdPais) ;
    } catch (error) {
        return res.status(500).json(error) ;
    }
}

const putPais = async (req, res, next) => {
    try {
        const {id} = req.params;
        const pais = new Pais(req.body)
        pais._id = id;
        const newPais = await Pais.findByIdAndUpdate(id,pais, {new:true})
        return res.status(201).json(newPais)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deletePais = async (req, res, next) => {
    try {
        const {id} = req.params;
        const pais = await Pais.findByIdAndDelete(id)
        return res.status(200).json("Pais borrada")
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = {getAllPaises, postPais, putPais, deletePais}