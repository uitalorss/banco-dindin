import { Request, Response } from "express";
import { ListCategoriesService } from "../services/listCategoriesService";

export class ListCategoriesController {
    private categoriesService: ListCategoriesService;

    constructor(categoriesService: ListCategoriesService){
        this.categoriesService = categoriesService;
    }

    async handle(req: Request, res: Response){
        try {
            const categories = await this.categoriesService.execute();
            return res.status(200).json(categories);
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({message: "Internal Server Error"});  
        } 
    }
}