"use client";

import React from "react";
import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { Alert } from "../../atoms/alert/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerFormSchema, RegisterFormData } from "./validador";
import { useTranslations } from 'next-intl';

export default function FormRegister() {
  const t = useTranslations();

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
      noValidate
      className="flex flex-col gap-4 w-full"
    >
      {isSubmitSuccessful && (
        <Alert
          message={t('formRegister.alert')}
          type="success"
          duration={4000}
        />
      )}
      <div>
        <Label>{t('formRegister.name.label')}</Label>
        <Input
          {...register("nome")}
          hasError={!!errors.nome}
          type="text"
          placeholder={t('formRegister.name.placeholder')}
        />
        {errors.nome && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t('formRegister.name.error')}
          </p>
        )}
      </div>
      <div>
        <Label>{t('formRegister.email.label')}</Label>
        <Input
          {...register("email")}
          hasError={!!errors.email}
          placeholder={t('formRegister.email.placeholder')}
          type="email"
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t('formRegister.email.error')}
          </p>
        )}
      </div>
      <div>
        <Label>{t('formRegister.password.label')}</Label>
        <Input
          {...register("senha")}
          hasError={!!errors.senha}
          type="password"
          placeholder={t('formRegister.password.placeholder')}
        />
        {errors.senha && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t('formRegister.password.error')}
          </p>
        )}
      </div>
      <Button id="btn-register" type="submit" disabled={isSubmitting}>
        {isSubmitting ? `${t('formRegister.btn.run')}` : `${t('formRegister.btn.stop')}`}
      </Button>
    </form>
  );
}
