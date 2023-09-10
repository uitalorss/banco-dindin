require("dotenv").config();
import { sign } from "jsonwebtoken"

export class treatmentToken {
     public static signToken(id: number): string {
        return sign({id: id}, process.env.JWT_KEY ?? " ", {expiresIn: "15m"})
    }
}