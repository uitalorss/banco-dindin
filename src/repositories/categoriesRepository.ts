import { pool } from "../config/connect";


export class CategoriesRepository {

    private static instance: CategoriesRepository;

    private constructor(){}

    public static getInstance(): CategoriesRepository{
        if(!CategoriesRepository.instance){
            CategoriesRepository.instance = new CategoriesRepository();
        }
        return CategoriesRepository.instance;
    }

    async getCategories(){
        const {rows: categories} = await pool.query("select * from categorias");
        return categories
    }
}