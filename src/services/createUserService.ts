import { UsersRepository } from "../repositories/usersRepository";

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
        return await this.usersRepository.create({name, email, password})
    }
}