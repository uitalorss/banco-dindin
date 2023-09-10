import { UsersRepository } from "../repositories/usersRepository";
import { passwordTreatment } from "../utils/treatmentPassword";
import { treatmentToken } from "../utils/treatmentToken";

interface ILoginUser {
    email: string;
    password: string;
} 

export class LoginUserService {
    private usersRepository: UsersRepository;

    constructor(repository: UsersRepository){
        this.usersRepository = repository;
    }

    async execute({email, password}: ILoginUser){
        const user = await this.usersRepository.findByEmail(email);
        if(!user){
            throw new Error("Usuário ou senha inválidos");
        }
        const passwordEncripted = user.senha;
        
        const isUserValid = await passwordTreatment.verifyPassword(password, passwordEncripted);
        if(!isUserValid){
            throw new Error("Usuário ou senha inválidos");
        }
        const token = treatmentToken.signToken(user.id);
        const {password: _, ...dataUser} = user

        const confirmationLogin = {user: dataUser, token};
        return confirmationLogin;

    }
}