import { UsersRepository } from "../repositories/usersRepository";
import { passwordTreatment } from "../utils/treatmentPassword";

interface IUserModel {
    name: string;
    email: string;
    password: string
}

export class CreateUserService {
    private usersRepository: UsersRepository;
    
    constructor(repository: UsersRepository){
        this.usersRepository = repository
    }

    async execute({name, email, password}: IUserModel){
        const passwordEncripted = await passwordTreatment.encriptPassword(password)
        return await this.usersRepository.create({name, email, passwordEncripted})
    }
}