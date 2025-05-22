"use client";

import React, { useState } from "react";
import { Title } from "../components/atoms/title/Title";
import FormLogin from "../components/molecules/formLogin/FormLogin";
import FormRegister from "../components/molecules/formRegister/FormRegister";
import GoogleButton from "../components/molecules/googleButton/GoogleButton";
import { useGoogleLogin } from "../hooks/useGoogleLogin";
import { useTranslations } from "next-intl";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { loginWithGoogle } = useGoogleLogin();
  const t = useTranslations();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error(`${t("perfil.errorGoogle")} ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center px-4 py-8 sm:px-8 md:px-12 lg:px-24 xl:px-32 gap-20">
      <Title level={1}>
        {t("perfil.title")}
      </Title>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8">
        <section className="w-full lg:w-1/2 flex flex-col gap-4">
          <Title level={2}>{t("perfil.signin.title")}</Title>
          <FormLogin />
          <div className="text-center text-sm text-gray-500">{t("perfil.signin.ou")}</div>
          <GoogleButton onClick={handleLogin} loading={loading} />
        </section>

        <div className="hidden lg:block border-l border-gray-300"></div>

        <section className="w-full lg:w-1/2 flex flex-col gap-4">
          <Title level={2}>{t("perfil.signup.title")}</Title>
          <FormRegister />
        </section>
      </div>
    </main>
  );
}