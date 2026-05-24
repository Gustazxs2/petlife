"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Usuario = {
  id: number;
  name: string;
  email: string;
};

export default function Navbar() {
  const router = useRouter();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuario");

    if (usuarioSalvo) {
      setUsuario(JSON.parse(usuarioSalvo));
    }
  }, []);

  function sair() {
    localStorage.removeItem("logado");
    localStorage.removeItem("usuario");
    localStorage.removeItem("dataLogin");

    setUsuario(null);
    setMenuAberto(false);

    router.push("/login");
  }

  return (
    <header className="sticky top-0 z-40 border-b-4 border-green-800 bg-[#f4fff7] shadow-[0_4px_0_#166534] dark:border-green-400 dark:bg-gray-950 dark:shadow-[0_4px_0_#14532d]">
      <div className="flex w-full items-center justify-between px-8 py-4 md:px-16">
        <Link href="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Logo PetLife"
    className="h-20 w-20 object-contain"
  />

  <span className="pixel-title text-2xl font-bold text-green-800 dark:text-green-400 md:text-3xl">
    PetLife
  </span>
</Link>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className="font-semibold text-gray-700 hover:text-green-800 dark:text-gray-200"
          >
            Início
          </Link>

          <Link
            href="/#sobre"
            className="font-semibold text-gray-700 hover:text-green-800 dark:text-gray-200"
          >
            Sobre nós
          </Link>

          <Link
            href="/produtos"
            className="font-semibold text-gray-700 hover:text-green-800 dark:text-gray-200"
          >
            Produtos
          </Link>

          <Link
            href="/agendamento"
            className="font-semibold text-gray-700 hover:text-green-800 dark:text-gray-200"
          >
            Agendamentos
          </Link>

          <Link
  href="/carrinho"
  className="pixel-button bg-green-800 px-4 py-2 font-semibold text-white hover:bg-green-900"
>
  🛒 Carrinho
</Link>

          {usuario ? (
            <>
              <Link
                href="/usuario"
                className="pixel-card flex items-center gap-3 bg-white px-4 py-2 hover:bg-green-50 dark:bg-gray-900 dark:hover:bg-gray-800"
              >
                <div className="pixel-card flex h-10 w-10 items-center justify-center bg-green-800 text-white">
                  👤
                </div>

                <div className="leading-tight">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Usuário
                  </p>

                  <p className="font-bold text-green-800 dark:text-green-400">
                    {usuario.name}
                  </p>
                </div>
              </Link>

              <button
                onClick={sair}
                className="pixel-button bg-red-600 px-5 py-2 font-semibold text-white hover:bg-red-700"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="font-semibold text-gray-700 hover:text-green-800 dark:text-gray-200"
              >
                Login
              </Link>

              <Link
                href="/cadastro"
                className="pixel-button bg-green-800 px-5 py-2 font-semibold text-white hover:bg-green-900"
              >
                Cadastro
              </Link>
            </>
          )}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuAberto(!menuAberto)}
          className="pixel-button flex h-11 w-11 items-center justify-center bg-green-800 text-2xl text-white md:hidden"
        >
          {menuAberto ? "×" : "☰"}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuAberto && (
        <div className="border-t-4 border-green-800 bg-[#f4fff7] px-5 py-5 dark:border-green-400 dark:bg-gray-950 md:hidden">
          <nav className="flex flex-col gap-4">
            <Link
              href="/"
              onClick={() => setMenuAberto(false)}
              className="pixel-card bg-white px-4 py-3 font-semibold text-gray-700 hover:bg-green-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Início
            </Link>

            <Link
              href="/#sobre"
              onClick={() => setMenuAberto(false)}
              className="pixel-card bg-white px-4 py-3 font-semibold text-gray-700 hover:bg-green-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Sobre nós
            </Link>

            <Link
              href="/produtos"
              onClick={() => setMenuAberto(false)}
              className="pixel-card bg-white px-4 py-3 font-semibold text-gray-700 hover:bg-green-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Produtos
            </Link>

            <Link
              href="/agendamento"
              onClick={() => setMenuAberto(false)}
              className="pixel-card bg-white px-4 py-3 font-semibold text-gray-700 hover:bg-green-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Agendamentos
            </Link>

            <Link
              href="/carrinho"
              onClick={() => setMenuAberto(false)}
              className="pixel-button bg-green-800 px-4 py-3 text-center font-semibold text-white hover:bg-green-900"
>
  🛒 Carrinho
</Link>

            {usuario ? (
              <>
                <Link
                  href="/usuario"
                  onClick={() => setMenuAberto(false)}
                  className="pixel-card flex items-center gap-3 bg-white p-4 dark:bg-gray-900"
                >
                  <div className="pixel-card flex h-12 w-12 items-center justify-center bg-green-800 text-white">
                    👤
                  </div>

                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Usuário
                    </p>

                    <p className="font-bold text-green-800 dark:text-green-400">
                      {usuario.name}
                    </p>
                  </div>
                </Link>

                <button
                  onClick={sair}
                  className="pixel-button bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700"
                >
                  Sair
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMenuAberto(false)}
                  className="pixel-card bg-white px-4 py-3 font-semibold text-gray-700 hover:bg-green-100 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  Login
                </Link>

                <Link
                  href="/cadastro"
                  onClick={() => setMenuAberto(false)}
                  className="pixel-button bg-green-800 px-4 py-3 text-center font-semibold text-white hover:bg-green-900"
                >
                  Cadastro
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}