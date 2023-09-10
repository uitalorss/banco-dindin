import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().nonempty().email({message: "Informe um email válido."}),
    password: z.string().nonempty()
})