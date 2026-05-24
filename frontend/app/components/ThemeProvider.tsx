"use client";

import { useEffect, useState } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    const navegadorEscuro = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (temaSalvo === "escuro" || (!temaSalvo && navegadorEscuro)) {
      document.documentElement.classList.add("dark");
      setModoEscuro(true);
    } else {
      document.documentElement.classList.remove("dark");
      setModoEscuro(false);
    }
  }, []);

  function trocarTema() {
    const novoTema = !modoEscuro;

    setModoEscuro(novoTema);

    if (novoTema) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("tema", "escuro");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("tema", "claro");
    }
  }

  return (
    <>
      <button
        onClick={trocarTema}
        title={modoEscuro ? "Ativar modo claro" : "Ativar modo escuro"}
        className="pixel-button fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center bg-green-800 text-2xl text-white hover:bg-green-900"
      >
        {modoEscuro ? "☀️" : "🌙"}
      </button>

      {children}
    </>
  );
}