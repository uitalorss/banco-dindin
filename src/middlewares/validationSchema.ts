import { NextFunction, Request, Response } from "express"
import { AnyZodObject } from "zod"


export const validationSchema = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query
        });
        next();
    } catch (error: any) {
        console.log(error.message);
        return res.status(500).json({message: "Internal Server Error"});
    }
} 