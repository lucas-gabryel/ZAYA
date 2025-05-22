"use client";

import React, { useState } from "react";
import { Title } from "../components/atoms/title/Title";
import FormLogin from "../components/molecules/formLogin/FormLogin";
import FormRegister from "../components/molecules/formRegister/FormRegister";
import GoogleButton from "../components/molecules/googleButton/GoogleButton";
import { useGoogleLogin } from "../hooks/useGoogleLogin";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { loginWithGoogle } = useGoogleLogin();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await loginWithGoogle();
    } catch (err) {
      console.error("Erro ao fazer login:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex flex-col justify-center items-center gap-6 p-12">
      <Title level={1}>Seja um membro ZAYA</Title>
      <div className="flex">
        <section className="pr-12">
          <Title level={2}>Entrar</Title>
          <FormLogin />
          <div className="my-2 text-center text-sm text-gray-500">ou</div>
          <GoogleButton onClick={handleLogin} loading={loading} />
        </section>

        <section className="pl-12 border-l">
          <Title level={2}>Registrar</Title>
          <FormRegister />
        </section>
      </div>
    </main>
  );
}
