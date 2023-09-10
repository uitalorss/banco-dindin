import { LoginUserController } from "../controllers/loginUserController";
import { UsersRepository } from "../repositories/usersRepository";
import { LoginUserService } from "../services/loginUserService";


const usersRepository = UsersRepository.getInstance();
const loginUserService = new LoginUserService(usersRepository);
export const loginUserController = new LoginUserController(loginUserService);