"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type Produto = {
  id: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: string;
};

export default function Carrinho() {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);

  useEffect(() => {
    const carrinhoSalvo = localStorage.getItem("carrinho");

    if (carrinhoSalvo) {
      setCarrinho(JSON.parse(carrinhoSalvo));
    }
  }, []);

  function removerProduto(index: number) {
    const novoCarrinho = carrinho.filter((_, i) => i !== index);

    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    toast.success("Produto removido do carrinho.");
  }

  function limparCarrinho() {
    setCarrinho([]);
    localStorage.removeItem("carrinho");

    toast.success("Carrinho limpo.");
  }

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  return (
    <main className="min-h-screen bg-[#f4fff7] px-6 py-12 text-gray-800 dark:bg-gray-950 dark:text-white">
      <section className="mx-auto max-w-5xl">
        <h1 className="pixel-title text-center text-4xl font-bold text-green-800 dark:text-green-400">
          🛒 Carrinho
        </h1>

        {carrinho.length === 0 ? (
          <div className="pixel-card mt-10 bg-white p-8 text-center dark:bg-gray-900">
            <p className="text-gray-600 dark:text-gray-300">
              Seu carrinho está vazio.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-[2fr_1fr]">
            <div className="flex flex-col gap-5">
              {carrinho.map((produto, index) => (
                <div
                  key={`${produto.id}-${index}`}
                  className="pixel-card flex flex-col gap-5 bg-white p-5 dark:bg-gray-900 md:flex-row"
                >
                  <img
                    src={produto.imagem}
                    alt={produto.nome}
                    className="h-32 w-full object-cover md:w-40"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <h2 className="pixel-title text-xl font-bold text-green-800 dark:text-green-400">
                        {produto.nome}
                      </h2>

                      <p className="text-gray-600 dark:text-gray-300">
                        {produto.categoria}
                      </p>

                      <p className="mt-2 font-bold text-green-800 dark:text-green-400">
                        R$ {produto.preco.toFixed(2).replace(".", ",")}
                      </p>
                    </div>

                    <button
                      onClick={() => removerProduto(index)}
                      className="pixel-button mt-4 bg-red-600 px-4 py-2 font-semibold text-white hover:bg-red-700"
                    >
                      Remover
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="pixel-card h-fit bg-white p-6 dark:bg-gray-900">
              <h2 className="pixel-title text-2xl font-bold text-green-800 dark:text-green-400">
                Resumo
              </h2>

              <p className="mt-5 text-gray-600 dark:text-gray-300">
                Itens: {carrinho.length}
              </p>

              <p className="mt-3 text-2xl font-bold text-green-800 dark:text-green-400">
                Total: R$ {total.toFixed(2).replace(".", ",")}
              </p>

              <button
                onClick={() => toast.success("Compra simulada com sucesso!")}
                className="pixel-button mt-6 w-full bg-green-800 px-4 py-3 font-semibold text-white hover:bg-green-900"
              >
                Finalizar compra
              </button>

              <button
                onClick={limparCarrinho}
                className="pixel-button mt-4 w-full bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700"
              >
                Limpar carrinho
              </button>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}