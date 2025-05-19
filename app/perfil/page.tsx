'use client';

import React from "react";
import Input from "../components/atoms/input/Input";
import Button from "../components/atoms/button/Button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-svh flex flex-col justify-center items-center gap-6 p-4">
      <h1 className="text-3xl font-bold">Entrar na ZAYA</h1>
      <form className="flex flex-col gap-4 w-full max-w-sm">
        <Input type="email" placeholder="Email" name="email" required />
        <Input type="password" placeholder="Senha" name="password" required />
        <Button id="btn-login">Entrar</Button>
      </form>

      <div className="my-4 text-center text-sm text-gray-500">ou</div>

      <button
        className="border px-4 py-2 rounded hover:bg-zinc-100 transition"
        onClick={() => signIn("google")}
      >
        Entrar com Google
      </button>
    </main>
  );
}
