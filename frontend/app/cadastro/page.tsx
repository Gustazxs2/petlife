"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Cadastro() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar(e: React.FormEvent) {
    e.preventDefault();

    const resposta = await fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: nome,
        email,
        password: senha,
      }),
    });

    const dados = await resposta.json();

    if (resposta.ok) {
      toast.success("Cadastro realizado com sucesso!");
      router.push("/login");
    } else {
      toast.error(dados.message || "Erro ao cadastrar usuário.");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4fff7] px-4 dark:bg-gray-950">
      <div className="pixel-card w-full max-w-md bg-white p-8 dark:bg-gray-900">
        <h1 className="pixel-title text-center text-3xl font-bold text-green-800 dark:text-green-400">
          Cadastro
        </h1>

        <form onSubmit={cadastrar} className="mt-8 flex flex-col gap-4">
          <input
            type="text"
            required
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="pixel-input px-4 py-3 text-black placeholder:text-gray-500 outline-green-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            type="email"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pixel-input px-4 py-3 text-black placeholder:text-gray-500 outline-green-700 dark:bg-gray-800 dark:text-white"
          />

          <input
            type="password"
            required
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className="pixel-input px-4 py-3 text-black placeholder:text-gray-500 outline-green-700 dark:bg-gray-800 dark:text-white"
          />

          <button
            type="submit"
            className="pixel-button bg-green-800 py-3 font-semibold text-white hover:bg-green-900"
          >
            Criar conta
          </button>
        </form>
      </div>
    </main>
  );
}