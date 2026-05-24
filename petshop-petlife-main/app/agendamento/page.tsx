"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type Agendamento = {
  id: number;
  nomePet: string;
  data: string;
  servico: string;
  userEmail: string;
};

export default function Agendamento() {
  const router = useRouter();

  const [nomePet, setNomePet] = useState("");
  const [data, setData] = useState("");
  const [servico, setServico] = useState("");
  const [usuario, setUsuario] = useState<any>(null);
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([]);

  useEffect(() => {
    const logado = localStorage.getItem("logado");
    const usuarioSalvo = localStorage.getItem("usuario");

    if (logado !== "true" || !usuarioSalvo) {
      toast.error("Você precisa fazer login.");
      router.push("/login");
      return;
    }

    const usuarioConvertido = JSON.parse(usuarioSalvo);

    setUsuario(usuarioConvertido);

    carregarAgendamentos(usuarioConvertido.email);
  }, [router]);

  async function carregarAgendamentos(email: string) {  
    try {
      const token = localStorage.getItem("token");

      const resposta = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/agendamento`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const dados = await resposta.json();

      const meusAgendamentos = dados.filter(
        (item: Agendamento) => item.userEmail === email
      );

      setAgendamentos(meusAgendamentos);
    } catch (error) {
      console.log(error);

      toast.error("Erro ao carregar agendamentos.");
    }
  }

  async function agendar(e: React.FormEvent) {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");

      const resposta = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/agendamentos`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nomePet,
            data,
            servico,
            userEmail: usuario.email,
          }),
        }
      );

      const dados = await resposta.json();

      if (resposta.ok) {
        toast.success("Agendamento realizado!");

        setNomePet("");
        setData("");
        setServico("");

        carregarAgendamentos(usuario.email);
      } else {
        toast.error(dados.message || "Erro ao agendar serviço");
      }
    } catch (error) {
      console.log(error);

      toast.error("Erro no servidor.");
    }
  }

  return (
    <main className="flex min-h-screen justify-center bg-[#f4fff7] p-10 text-gray-800 dark:bg-gray-950 dark:text-white">
      <div className="w-full max-w-5xl">
        <h1 className="pixel-title text-center text-4xl font-bold text-green-800 dark:text-green-400">
          Agendamentos
        </h1>

        <div className="mt-10 grid items-start gap-8 md:grid-cols-2">
          <div className="pixel-card bg-white p-8 dark:bg-gray-900">
            <h2 className="pixel-title mb-6 text-2xl font-bold text-green-800 dark:text-green-400">
              Novo agendamento
            </h2>

            <form onSubmit={agendar} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nome do pet"
                required
                value={nomePet}
                onChange={(e) => setNomePet(e.target.value)}
                className="pixel-input px-4 py-3 text-black placeholder:text-gray-500 outline-green-700 dark:bg-gray-800 dark:text-white"
              />

              <input
                type="date"
                required
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="pixel-input px-4 py-3 text-black outline-green-700 dark:bg-gray-800 dark:text-white"
              />

              <select
                required
                value={servico}
                onChange={(e) => setServico(e.target.value)}
                className="pixel-input px-4 py-3 text-black outline-green-700 dark:bg-gray-800 dark:text-white"
              >
                <option value="">Selecione um serviço</option>

                <option value="Banho">Banho</option>

                <option value="Tosa">Tosa</option>

                <option value="Consulta veterinária">
                  Consulta veterinária
                </option>

                <option value="Vacinação">Vacinação</option>
              </select>

              <button
                type="submit"
                className="pixel-button bg-green-800 py-3 font-semibold text-white hover:bg-green-900"
              >
                Confirmar agendamento
              </button>
            </form>
          </div>

          <div className="pixel-card max-h-[520px] overflow-y-auto bg-white p-8 dark:bg-gray-900">
            <h2 className="pixel-title mb-6 text-2xl font-bold text-green-800 dark:text-green-400">
              Meus agendamentos
            </h2>

            {agendamentos.length === 0 ? (
              <p className="text-gray-600 dark:text-gray-300">
                Você ainda não possui agendamentos.
              </p>
            ) : (
              <div className="flex flex-col gap-4">
                {agendamentos.map((item) => (
                  <div
                    key={item.id}
                    className="pixel-card bg-[#f4fff7] p-4 dark:bg-gray-800"
                  >
                    <p className="font-bold text-green-800 dark:text-green-400">
                      {item.nomePet}
                    </p>

                    <p className="text-gray-600 dark:text-gray-300">
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
        </div>
      </div>
    </main>
  );
}