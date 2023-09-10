import { UsersRepository } from "../repositories/usersRepository";
import { encriptPassword } from "../utils/encriptPassword";

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
        const passwordEncripted = await encriptPassword(password)
        return await this.usersRepository.create({name, email, passwordEncripted})
    }
}