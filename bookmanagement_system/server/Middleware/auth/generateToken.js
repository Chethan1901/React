import jwt from "jsonwebtoken";
import config from "config";



let private_key = config.get("PRIVATE_KEY");

function generateToken(payload) {
    try {
        const token = jwt.sign(payload, private_key, { expiresIn: "7d" });
        return token;
    } catch (error) {
        console.error(error);
        return
    }
}

export default generateToken;