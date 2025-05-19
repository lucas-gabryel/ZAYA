import React from "react";
import Link from "next/link";
import { Title } from "./components/atoms/title/Title";
import { Text } from "./components/atoms/text/Text";
import Button from "./components/atoms/button/Button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gray-100">
      <Title>404</Title>
      
      <Title level={2}>
        Opss... página ainda em construção 🛠️
      </Title>

      <Text color="text-zinc-500 mb-6">
        A página que você tentou acessar ainda não está disponível.
      </Text>

      <Link href="/" passHref>
        <Button className="bg-black text-white hover:bg-zinc-800 px-4 py-3 rounded">Voltar para Home</Button>
      </Link>
    </div>
  );
}
