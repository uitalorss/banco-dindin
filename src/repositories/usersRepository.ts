import { pool } from "../config/connect";
import { userModel } from "../schemas/createUserSchema";

export class UsersRepository {
    private static instance: UsersRepository;

    private constructor(){}

    public static getInstance(){
        if(!UsersRepository.instance){
            UsersRepository.instance = new UsersRepository();
        }
        return UsersRepository.instance;
    }

    async create({name, email, password}: userModel){
        const {rows: user} = await pool.query("insert into usuarios (nome, email, senha) values ($1, $2, $3) returning *", [name, email, password]);
        const {senha: _, ...dadosUsuario} = user[0];
        console.log(dadosUsuario);
        return dadosUsuario;
    }
}