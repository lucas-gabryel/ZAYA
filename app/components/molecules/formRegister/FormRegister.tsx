"use client";

import React from "react";
import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { Alert } from "../../atoms/alert/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormData } from "./validador";

export default function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-full max-w-sm"
    >
      {isSubmitSuccessful && (
        <Alert
          message="Registro realizado com sucesso!"
          type="success"
          duration={4000}
        />
      )}
      <div>
        <Label>Nome</Label>
        <Input
          {...register("nome")}
          hasError={!!errors.nome}
          type="text"
          placeholder="Digite seu nome"
        />
        {errors.nome && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.nome.message}
          </p>
        )}
      </div>
      <div>
        <Label>E-mail</Label>
        <Input
          {...register("email")}
          hasError={!!errors.email}
          type="email"
          placeholder="Digite seu e-mail"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.email.message}
          </p>
        )}
      </div>
      <div>
        <Label>Senha</Label>
        <Input
          {...register("senha")}
          hasError={!!errors.senha}
          type="password"
          placeholder="Digite sua senha"
        />
        {errors.senha && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {errors.senha.message}
          </p>
        )}
      </div>
      <Button id="btn-register" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registrando..." : "Registrar"}
      </Button>
    </form>
  );
}
