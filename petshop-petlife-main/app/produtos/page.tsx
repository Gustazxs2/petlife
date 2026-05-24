"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: string;
};

export default function Produtos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    async function carregarProdutos() {
      const resposta = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/produtos`
      );

      const dados = await resposta.json();
      setProdutos(dados);
    }

    carregarProdutos();
  }, []);

  return (
    <main className="min-h-screen bg-[#f4fff7] px-6 py-12 text-gray-800 dark:bg-gray-950 dark:text-white">
      <section className="mx-auto max-w-6xl">
        <div className="text-center">
          <h1 className="pixel-title text-4xl font-bold text-green-800 dark:text-green-400">
            Catálogo de Produtos
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Confira alguns produtos disponíveis na PetLife.
          </p>
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="pixel-card overflow-hidden bg-white dark:bg-gray-900"
            >
              <div className="border-b-4 border-green-800 dark:border-green-400">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="h-48 w-full object-cover"
                />
              </div>

              <div className="p-6">
                <p className="text-sm font-bold uppercase tracking-wide text-green-700 dark:text-green-400">
                  {produto.categoria}
                </p>

                <h2 className="pixel-title mt-2 text-xl font-bold text-gray-800 dark:text-white">
                  {produto.nome}
                </h2>

                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  {produto.descricao}
                </p>

                <div className="mt-5 flex flex-col gap-4">
                  <span className="text-xl font-bold text-green-800 dark:text-green-400">
                    R$ {produto.preco.toFixed(2).replace(".", ",")}
                  </span>

                  <Link
                    href={`/produtos/${produto.id}`}
                    className="pixel-button bg-green-800 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-green-900"
                  >
                    Ver produto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}