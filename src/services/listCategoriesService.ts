import { CategoriesRepository } from "../repositories/categoriesRepository";


export class ListCategoriesService {
    private categoriesRepository: CategoriesRepository;

    constructor(repository: CategoriesRepository){
        this.categoriesRepository = repository;
    }

    async execute(){
        return await this.categoriesRepository.getCategories();
    }
}