const User = require('../model/users.model');
const bcrypt = require('bcrypt');
const { validationPassword, validationEmail } = require('../../validators/validation');
const {generateSign, verifyJwt} = require('../../jwt/jwt');

const register = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        if(!validationEmail(req.body.email)){
            //console.log({code: 403, message: "Invalid email"})
            res.status(403).send({code: 403, message: "Invalid email"});
            return next();
        }
        if(!validationPassword(req.body.password)){
            res.status(403).send({code: 403, message: "Invalid password"});
            return next();
        }
        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();
        return res.status(201).json(createdUser);
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const login = async (req, res, next) => {
    try {
        console.log(req.headers.authorization)
        const userInfo = await User.findOne({email: req.body.email});
        if(!userInfo){
            return res.status(404).json("Not Found Email")
        }

        if(bcrypt.compareSync(req.body.password, userInfo.password)){            
            // userInfo.password = null;
            // console.log(userInfo)
            const token = generateSign(userInfo._id, userInfo.email)
            return res.status(200).json(token);
        }else{
            return res.status(400).json({message: "invalid password"});
        }

        // if(!userInfo){
        //     return res.status(400).json({message: "invalid user"});
        // }
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const logout = (req, res, next) => {
    try {
        return res.status(200).json({token: null})//????de donde se recoge token???
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find()
        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        return res.status(200).json("User deleted")
    } catch (error) {
        return res.status(500).json(error)
    }
}

const deleteAllUsers = async (req, res, next) => {
    try {
        await User.collection.drop();
        return res.status(200).json("Deleted all users!")
    } catch (error) {
       return res.staus(500).json(error) 
    }
}



module.exports = {register, login, logout, getAllUsers, deleteUser, deleteAllUsers}