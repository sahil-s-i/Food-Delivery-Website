import jwt from "jsonwebtoken"

const authMiddleware = async (req, res, next) => {
    const { token } = req.headers;
    if (!token) {
        return res.json({ success: false, message: "Not Authorized Login Agian" })
    }
    try {
        const token_Decode = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {

    }

}

export default authMiddleware;