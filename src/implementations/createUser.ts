import { CreateUserController } from "../controllers/createUserController";
import { UsersRepository } from "../repositories/usersRepository";
import { CreateUserService } from "../services/createUserService";


const usersRepository = UsersRepository.getInstance();
const createUserService = new CreateUserService(usersRepository);
export const createUserController = new CreateUserController(createUserService);