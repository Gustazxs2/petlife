"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Usuario = {
  id: number;
  name: string;
  email: string;
};

type Agendamento = {
  id: number;
  nomePet: string;
  data: string;
  servico: string;
  userEmail: string;
};

export default function UsuarioPage() {
  const router = useRouter();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [dataLogin, setDataLogin] = useState("");
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  useEffect(() => {
    const logado = localStorage.getItem("logado");
    const usuarioSalvo = localStorage.getItem("usuario");
    const dataSalva = localStorage.getItem("dataLogin");

    if (logado !== "true" || !usuarioSalvo) {
      router.push("/login");
      return;
    }

    const usuarioConvertido = JSON.parse(usuarioSalvo);

    setUsuario(usuarioConvertido);
    setDataLogin(dataSalva || "Não informado");

    carregarAgendamentos(usuarioConvertido.email);
  }, [router]);

async function carregarAgendamentos(email: string) {
  const token = localStorage.getItem("token");

  const resposta = await fetch(
    "https://petlife-schenduling-service.onrender.com",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const dados = await resposta.json();

console.log(dados);
console.log(Array.isArray(dados));

  console.log(dados);
  console.log(email);

  const meusAgendamentos = dados.filter(
    (item: Agendamento) => item.userEmail === email
  );

  setAgendamentos(meusAgendamentos);
}

  if (!usuario) {
    return null;
  }

  return (
    <main className="min-h-screen bg-[#f4fff7] px-6 py-12 text-gray-800 dark:bg-gray-950 dark:text-white">
      <section className="mx-auto max-w-5xl">
        <div className="pixel-card bg-white p-8 dark:bg-gray-900">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="pixel-card flex h-24 w-24 items-center justify-center bg-green-800 text-5xl text-white">
              👤
            </div>

            <h1 className="pixel-title text-4xl font-bold text-green-800 dark:text-green-400">
              {usuario.name}
            </h1>

            <p className="text-gray-600 dark:text-gray-300">
              {usuario.email}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="pixel-card bg-[#f4fff7] p-5 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Nome
              </p>

              <p className="mt-2 font-bold text-green-800 dark:text-green-400">
                {usuario.name}
              </p>
            </div>

            <div className="pixel-card bg-[#f4fff7] p-5 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                E-mail
              </p>

              <p className="mt-2 break-words font-bold text-green-800 dark:text-green-400">
                {usuario.email}
              </p>
            </div>

            <div className="pixel-card bg-[#f4fff7] p-5 dark:bg-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Data do login
              </p>

              <p className="mt-2 font-bold text-green-800 dark:text-green-400">
                {dataLogin}
              </p>
            </div>
          </div>
        </div>

        <div className="pixel-card mt-10 bg-white p-8 dark:bg-gray-900">
          <h2 className="pixel-title text-3xl font-bold text-green-800 dark:text-green-400">
            Meus agendamentos
          </h2>

          {agendamentos.length === 0 ? (
            <p className="mt-6 text-gray-600 dark:text-gray-300">
              Você ainda não possui agendamentos cadastrados.
            </p>
          ) : (
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {agendamentos.map((item) => (
                <div
                  key={item.id}
                  className="pixel-card bg-[#f4fff7] p-5 dark:bg-gray-800"
                >
                  <h3 className="pixel-title text-xl font-bold text-green-800 dark:text-green-400">
                    {item.nomePet}
                  </h3>

                  <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Serviço: {item.servico}
                  </p>

                  <p className="text-gray-600 dark:text-gray-300">
                    Data: {item.data}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}