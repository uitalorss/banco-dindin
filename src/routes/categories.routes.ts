import { Router } from "express";
import { categoriesController } from "../implementations/listCategories";

export const categoriesRouter = Router();

categoriesRouter.get("/", (req, res) => {
    return categoriesController.handle(req, res);
})