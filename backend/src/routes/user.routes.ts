import UserController from "../controllers/user.controller";
import { Router } from "express";
import appDataSource from "../infra/data-source";
import { User } from "../infra/entities/user.entity";
import UserServices from "../services/user.services";

const userRouter = Router()

const service = new UserServices(appDataSource.getRepository(User))
const controller = new UserController(service)

userRouter.post('/create', async (req, res) => {
    await controller.createUserController(req, res)
})

export default userRouter