import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "config";
import randomString from "../../utils/randomString.js";

import Users from "../../Model/User/index.js";
import book from "../../Model/Book/index.js";

import generateToken from "../../Middleware/auth/generateToken.js";
import authMiddleware from "../../Middleware/auth/verifyToken.js";

import {
	userRegisterValidatorRules,
	loginValidation,
	errorMiddleware,
	addbookvalidations,
} from "../../Middleware/Validation/index.js";
const router = express.Router();

router.post(
	"/register",
	userRegisterValidatorRules(),
	errorMiddleware,
	async (req, res) => {
		try {
			let { firstname, lastname, email, password } = req.body;
			// console.log(req.body);
			//Avoid Double Registration
			let mailFound = await Users.findOne({ email });
			if (mailFound) {
				res.status(409).json({ error: "Email Already Registered" });
			}
			password = await bcrypt.hash(password, 12);
			let user_data = { firstname, lastname, email, password };
			const user = new Users(user_data);
			user.userverifytoken = randomString(15);

			await user.save();
			res.status(200).json({ success: "Register is UP" });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
);
router.post("/login", loginValidation(), errorMiddleware, async (req, res) => {
	try {
		let { email, password } = req.body;
		let userFound = await Users.findOne({ email });
		if (!userFound) {
			return res
				.status(401)
				.json({ error: "Invalid Credentials[user not found] " });
		}
		let matchPassword = await bcrypt.compare(password, userFound.password);
		console.log(matchPassword);
		if (!matchPassword) {
			return res
				.status(401)
				.json({ error: "Invalid Credentials 'password not match' " });
		}
		let payload = {
			user_id: userFound.user_id,
			role: "user",
		};
		//GENERATE A TOKEN
		const token = generateToken(payload);
		// console.log(token);
		res.status(200).json({ success: "Login is Successful", token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});
router.post(
	"/AddBook",
	addbookvalidations(),
	errorMiddleware,
	authMiddleware,
	async (req, res) => {
		try {
			const payload = req.payload;
			// console.log(payload);
			if (!payload) {
				return res.status(401).json({ error: "Unauthorised Access" });
			}

			let { title, Author, coverImagrUrl, id, PageCount, publisher, synopsis } =
				req.body;

			let userFound = await Users.findOne(payload.id);
			console.log(userFound);
			let Book_data = {
				title,
				Author,
				coverImagrUrl,
				id,
				PageCount,
				publisher,
				synopsis,
			};
			console.log(Book_data);
			const user = new book(Book_data);
			// console.log(userFound.BOOKS=[Book_data])
			//  userFound.push(Book_data);
			await user.save();
			res.status(200).json({ success: "Book was Added" });
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: "Internal Server Error" });
		}
	}
);
router.get("/books", async (req, res) => {
	try {
		let book_data = await book.find({});
		// await user.save();
		res.status(200).json({ success: "Book found", book_data });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: "Internal Server Error" });
	}
});
export default router;
