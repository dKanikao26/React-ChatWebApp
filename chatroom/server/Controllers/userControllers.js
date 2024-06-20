import express from "express";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import users from '../Models/userModel.js';

//_id denote unique id with which user reco
const createToken = (_id) => {
    const Token = jwt.sign({ _id }, process.env.your_jwt_secret, { expiresIn: "3d" })
    return Token;
}

// contain finction for handeling route req
export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        
        if (!name || !email || !password) return res.status(400).json("fill details correctly");

        if (!validator.isEmail(email)) return res.status(400).json("invalid email");

        if (!validator.isStrongPassword(password)) return res.status(400).json("make strong password");
        let user = await users.findOne({ email });
        if (user) return res.status(400).json("User already exists");
        
        
        user = new users({ name, email, password });

        // Generate a salt
        const salt = await bcrypt.genSalt(10);
        // Hash the password with the salt
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const t = createToken(user._id);
        res.status(200).json({ id: user._id, name, email, t });


    }
    catch (error) {
        res.status(500).json({error :error.message});
    }



}

export const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email });

        if (!user) return res.status(400).json("invalid email or password");


        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) return res.status(400).json("invalid username or password");

        const t = createToken(user._id);
        res.status(200).json({ id: user._id, name: user.email, email, t });




    } catch (error) {
        res.status(500).json(error);

    }
}

export const find = async (req, res) => {
    const userId = req.params.userId;
    try {
        const userId = users.findById(userId);
        res.status(200).json(userId);

    }
    catch (error) {
        res.status(500).json(error);

    }

}
export const findAll = async (req, res) => {
    //const userId = req.params.userId;
    try {
        const usersId = users.find();
        res.status(200).json(usersId);

    }
    catch (error) {
        res.status(500).json(error);

    }

}

