import { z } from "zod";

export const registerFormSchema = z.object({
    nome: z.string().min(3, {message: "O nome deve ter pelo menos três caracteres"}).max(100),
    email: z.string().email({message: "Por favor, insira um e-mail válido!"}),
    senha: z.string().min(8, { message: "A senha precisa ter mais de 7 caracteres" })  
})

export type RegisterFormData = z.infer<typeof registerFormSchema>;