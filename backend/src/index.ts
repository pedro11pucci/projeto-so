import Express from "express";
import cors from "cors";
import appDataSource from "./infra/data-source";
import userRouter from "./routes/user.routes";

require("dotenv").config()
const app = Express()

app.use(Express.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

appDataSource.initialize().then((connection) => {
    console.log("Database initialized")
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`)
    })
})

app.get('/', async (req, res) => {
    res.send("Hello World!")
})

app.use('/user', userRouter)