import express from 'express'
import db from './connect_to_db.js'
import protertyRouter from './routes/properties-router.js'
import authRouter from './routes/auth-router.js'
import userRouter from './routes/user-router.js'
import cookieParser from 'cookie-parser'
import cors from "cors";

const app = express()

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRouter)
app.use("/api/property", protertyRouter)
app.use("/api/users", userRouter)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    db();
    console.log("connected to backend");
})