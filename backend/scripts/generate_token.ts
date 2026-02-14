import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const payload = {
	id: "488db8e3-8642-4118-9e28-39ef4856c2df",
	email: "joao.professor@escola.com",
	role: "TEACHER",
};

const secret = process.env.JWT_SECRET || "devsecret";
const token = jwt.sign(payload, secret, { expiresIn: "1h" });

console.log("TOKEN:", token);
