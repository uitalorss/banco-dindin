import bcrypt from "bcrypt"

export const encriptPassword = async(password: string):Promise<string> => {
    return await bcrypt.hash(password, 10);
}