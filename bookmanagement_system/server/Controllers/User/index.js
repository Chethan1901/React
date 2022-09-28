import express from "express";
import bcrypt from "bcrypt";
import config from "config";



import randomString from "../../utils/randomString.js";
import generateToken from "../../Middleware/auth/generateToken.js";
//IMPORT Models

import Users from "../../Model/User/index.js";


//IMport Validations

import { userRegisterValidations, errorMiddleware, loginValidation } from "../../Middleware/Validation/index.js";

const router = express.Router();



/*
End Point : /api/user/register
Method POST
Access : Public
Validation : 
        Password must be 8 characters minimum length, 1 uppercase, 1 special character,1 lowercase is mandatory
        Email address is unique and required field
        Firstname length not more than 25 characters
        password & password2 should match, but save password field only.
 Description: User Signup

*/

router.post("/register",loginValidation ,userRegisterValidations(), errorMiddleware, async (req, res) => {

    try {

        let { firstname, lastname, email, password } = req.body;
        // console.log(req.body);
        //Avoid Double Registration
        let userData = await Users.findOne({ email });
        if (userData) {
            res.status(409).json({ "error": "Email Already Registered" })
        }

        password = await bcrypt.hash(password, 12);

        let user_data = {firstname,lastname,email,password}
        const user = new Users(user_data);

        user.userverifytoken = randomString(15);
        await user.save();

        res.status(200).json({ "success": "Register is UP" })

    } catch (error) {
        console.error(error);
        res.status(500).json({ "error": "Internal Server Error" })
    }
})


router.post("/login", loginValidation(), errorMiddleware, async (req, res) => {
    try {
        let { email, password } = req.body;
    
    
        let userFound = await Users.findOne({"email":email});
        if (!userFound) {
            return res.status(401).json({ "error": "Invalid Credentials " });
        }
        // console.log(userFound);
        let matchPassword = await bcrypt.compare(password, userFound.password)
        // console.log(matchPassword);
        if (!matchPassword) {
            return res.status(401).json({ "error": "Invalid Credentials " });
        }

        let payload = {
            user_id: userFound.user_id,
            role: "user"
        }

        // let privatekey = "codeforindia";    

        //GENERATE A TOKEN
        const token = generateToken(payload);
        // console.log(token);

        res.status(200).json({ success: "Login is Successful", token })


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" })
    }
})


export default router;