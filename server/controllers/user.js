import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';


export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne( {email });

        if (!existingUser) return res.status(404).json( {message: "User doesn't exisst" })

        const currentUser = existingUser;

        const isPasswordCorrect = await bcrypt.compare(password, currentUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid password" })

        const token = jwt.sign({ email: currentUser.email, id: currentUser._id }, 'test');

        res.status(200).json({ currentUser, token });


    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
    
};

export const signup = async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName} = req.body;

    try {
        const existingUser = await User.findOne( {email});

        if (existingUser) return res.status(404).json( {message: "User already exisst" });

        if (password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const currentUser = await User.create({
            email, password: hashedPassword, name: `${firstName} ${lastName}`
        })

        const token = jwt.sign({ email: currentUser.email, id: currentUser._id }, 'test');

        res.status(200).json({ currentUser, token });

    } catch (error) {
        res.status(500).json({ message: "Something went wrong" })
    }
};