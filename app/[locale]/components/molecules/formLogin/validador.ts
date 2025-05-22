import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email({message: "Por favor, insira um e-mail válido!"}),
    senha: z.string().min(8, {message: "A senha precisa ter mais de 7 caracteres"}).max(20),    
})

export type LoginFormData = z.infer<typeof loginFormSchema>;