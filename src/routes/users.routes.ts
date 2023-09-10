import { Router } from "express";
import { validationSchema } from "../middlewares/validationSchema";
import { createUserSchema } from "../schemas/createUserSchema";
import { createUserController } from "../implementations/createUser";

export const userRoutes = Router();

userRoutes.post("/", validationSchema(createUserSchema) ,(req, res) => {
    return createUserController.handle(req, res);
})