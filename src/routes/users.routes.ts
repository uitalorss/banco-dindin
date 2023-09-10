import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { createUserController } from "../implementations/createUser";
import { loginUserController } from "../implementations/loginUser";

export const userRoutes = Router();

userRoutes.post("/", validationSchema(createUserSchema) ,(req, res) => {
    return createUserController.handle(req, res);
})

userRoutes.post("/login", (req, res) => {
    return loginUserController.handle(req, res);
})