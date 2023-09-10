import { Request, Response } from "express";
import { CreateUserService } from "../services/createUserService";


export class CreateUserController {

    private createUserService: CreateUserService;

    constructor(createUserService: CreateUserService){
        this.createUserService = createUserService;
    }

    async handle(req: Request, res: Response){
        const{name, email, password} = req.body;
        try {
            const user = await this.createUserService.execute({name, email, password})
            return res.status(201).json(user);
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({message: "Internal Server Error"})
        }
    }
}