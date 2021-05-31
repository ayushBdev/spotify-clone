import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"
import AuthUser from "../Modals/Auth_Schema.js";

const secret = "test";
 
export const signin = async(req,res) => {
    const { email, password } = req.body;
    try{
        const oldUser = await AuthUser.findOne({email});
        if(!oldUser) return res.status(404).json({message: "User does not exists"});

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
        if(!isPasswordCorrect) return res.status(400).json({message: "Incorrect Credentials"})

        const token = jwt.sign({email: oldUser.email, id: oldUser._id}, secret, {expiresIn: "1h"});

        res.status(200).json({result: oldUser, token});

    }catch(err){
        res.status(500).json({message:"Something went wrong at auth controller server "});
        console.log(err);
    }
};

export const signup = async(req,res) => {
    const { name, email, password } = req.body;
    try{
        const oldUser = await AuthUser.findOne({email});
        if(oldUser) return res.status(404).json({message: "User already exists"});

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await AuthUser.create({email, password: hashedPassword, name: name});
        const token = jwt.sign({email: result.email, id: result._id}, secret, {expiresIn: "1h"});

        res.status(201).json({result,token});

    }catch(err){
        res.status(500).json({message:"Something went wrong at auth controller server "});
        console.log(err);
    }
};