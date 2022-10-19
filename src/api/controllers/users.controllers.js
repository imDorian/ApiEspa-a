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
            console.log({code: 403, message: "Invalid password"})
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
        //console.log(req.headers.authorization)
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
        return res.status(200).json({token: null})
    } catch (error) {
        return res.status(500).json(error) ;
    }
};

module.exports = {register, login, logout}