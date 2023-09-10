import bcrypt from "bcrypt"


export class passwordTreatment {
    public static encriptPassword = async(password: string):Promise<string> => {
        return await bcrypt.hash(password, 10);
    }

    public static verifyPassword = async(password: string, passwordEncripted: string): Promise<boolean> => {
        return await bcrypt.compare(password, passwordEncripted);
    }
}