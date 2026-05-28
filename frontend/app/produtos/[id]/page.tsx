"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: string;
};

export default function ProdutoDetalhe() {
  const params = useParams();
  const [produto, setProduto] = useState<Produto | null>(null);

  useEffect(() => {
    async function carregarProduto() {
      const resposta = await fetch(
        "https://petlife-produtos-services.onrender.comprodutos"
      );

      const dados = await resposta.json();

      const produtoEncontrado = dados.find(
        (item: Produto) => item.id === Number(params.id)
      );

      setProduto(produtoEncontrado);
    }

    carregarProduto();
  }, [params.id]);

  function adicionarAoCarrinho() {
    if (!produto) return;

    const carrinhoSalvo = localStorage.getItem("carrinho");
    const carrinho = carrinhoSalvo ? JSON.parse(carrinhoSalvo) : [];

    carrinho.push(produto);

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    toast.success("Produto adicionado ao carrinho!");
  }

  if (!produto) {
    return (
      <main className="min-h-screen bg-[#f4fff7] p-10 dark:bg-gray-950 dark:text-white">
        <p>Carregando produto...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f4fff7] px-6 py-12 text-gray-800 dark:bg-gray-950 dark:text-white">
      <section className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="pixel-card overflow-hidden bg-white dark:bg-gray-900">
          <img
            src={produto.imagem}
            alt={produto.nome}
            className="h-96 w-full object-cover"
          />
        </div>

        <div className="pixel-card bg-white p-8 dark:bg-gray-900">
          <p className="font-bold uppercase text-green-700 dark:text-green-400">
            {produto.categoria}
          </p>

          <h1 className="pixel-title mt-3 text-4xl font-bold text-green-800 dark:text-green-400">
            {produto.nome}
          </h1>

          <p className="mt-5 text-gray-600 dark:text-gray-300">
            {produto.descricao}
          </p>

          <div className="mt-8">
            <h2 className="pixel-title text-2xl font-bold text-green-800 dark:text-green-400">
              Descrição da compra
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Produto disponível para compra na PetLife. Adicione ao carrinho
              para revisar os itens antes de finalizar o pedido.
            </p>
          </div>

          <p className="mt-8 text-3xl font-bold text-green-800 dark:text-green-400">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </p>

          <button
            onClick={adicionarAoCarrinho}
            className="pixel-button mt-8 w-full bg-green-800 px-6 py-3 font-semibold text-white hover:bg-green-900"
          >
            🛒 Adicionar ao carrinho
          </button>
        </div>
      </section>
    </main>
  );
}