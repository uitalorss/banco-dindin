import { Request, Response } from "express";
import { LoginUserService } from "../services/loginUserService";


export class LoginUserController {
    private loginUserService: LoginUserService

    constructor(loginUserService: LoginUserService){
        this.loginUserService = loginUserService;
    }

    async handle(req: Request, res: Response){
        const {email, password} = req.body;
        try {
            const login = await this.loginUserService.execute({email, password});
            return res.status(200).json(login);
        } catch (error: any) {
            console.log(error.message)
            return res.status(500).json({message: "Internal server error"});
        }
    }
}