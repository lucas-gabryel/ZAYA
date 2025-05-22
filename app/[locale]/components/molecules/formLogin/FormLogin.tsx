import React from "react";
import Label from "../../atoms/label/Label";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { Alert } from "../../atoms/alert/Alert";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema, LoginFormData } from "./validador";
import { useTranslations } from 'next-intl';

export default function FormLogin() {
  const t = useTranslations();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
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
          message={t('formLogin.alert')}
          type="success"
          duration={4000}
        />
      )}
      <div>
        <Label>{t('formLogin.email.label')}</Label>
        <Input
          {...register("email")}
          hasError={!!errors.email}
          type="email"
          placeholder={t('formLogin.email.placeholder')}
        />
        {errors.email && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t('formLogin.email.error')}
          </p>
        )}
      </div>
      <div>
        <Label>{t('formLogin.password.label')}</Label>
        <Input
          {...register("senha")}
          hasError={!!errors.senha}
          type="password"
          placeholder={t('formLogin.password.placeholder')}
        />
        {errors.senha && (
          <p className="mt-1 text-xs text-red-600 dark:text-red-400">
            {t('formLogin.password.error')}
          </p>
        )}
      </div>
      <Button id="btn-login" type="submit" disabled={isSubmitting}>
        {isSubmitting ? `${t('formLogin.btn.run')}` : `${t('formLogin.btn.stop')}`}
      </Button>
    </form>
  );
}
