import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().nonempty(),
        email: z.string().email({message: "Informe um email válido"}),
        password: z.string().nonempty()
    })
})

export type userModel = z.infer<typeof createUserSchema>["body"];