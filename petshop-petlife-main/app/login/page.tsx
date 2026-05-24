"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function entrar(e: React.FormEvent) {
    e.preventDefault();

    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password: senha,
      }),
    });

const dados = await resposta.json();

if (resposta.ok) {
  localStorage.setItem("token", dados.token);

  localStorage.setItem("logado", "true");
  localStorage.setItem("usuario", JSON.stringify(dados.user));
  localStorage.setItem(
    "dataLogin",
    new Date().toLocaleDateString("pt-BR")
  );

  toast.success("Login realizado com sucesso!");

  window.location.href = "/";
} else {
  toast.error(dados.message || "E-mail ou senha incorretos.");
}
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f4fff7] px-4 dark:bg-gray-950">
      <div className="pixel-card w-full max-w-md bg-white p-8 dark:bg-gray-900">
        <h1 className="pixel-title text-center text-3xl font-bold text-green-800 dark:text-green-400">
          Login
        </h1>

        <form onSubmit={entrar} className="mt-8 flex flex-col gap-4">
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
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
          Não tem uma conta?{" "}
          <Link
            href="/cadastro"
            className="font-semibold text-green-800 hover:underline dark:text-green-400"
          >
            Cadastre-se
          </Link>
        </p>

        <Link
          href="/cadastro"
          className="pixel-button mt-4 block bg-white py-3 text-center font-semibold text-green-800 hover:bg-green-50 dark:bg-gray-900 dark:text-green-400 dark:hover:bg-gray-800"
        >
          Criar nova conta
        </Link>
      </div>
    </main>
  );
}