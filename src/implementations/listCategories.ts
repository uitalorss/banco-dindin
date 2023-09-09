import { ListCategoriesController } from "../controllers/listCategoriesController";
import { CategoriesRepository } from "../repositories/categoriesRepository";
import { ListCategoriesService } from "../services/listCategoriesService";


const categoriesRepository = CategoriesRepository.getInstance();
const categoriesService = new ListCategoriesService(categoriesRepository);
const categoriesController = new ListCategoriesController(categoriesService);

export {categoriesController}