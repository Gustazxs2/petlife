import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4fff7] text-gray-800 dark:bg-gray-950 dark:text-white">
      <section className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="pixel-title max-w-3xl text-5xl font-bold text-green-800 dark:text-green-400">
          Cuidando do seu pet com carinho e qualidade
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Banho, tosa, consultas, vacinação e produtos para deixar seu melhor
          amigo ainda mais feliz.
        </p>

        <Link
          href="/agendamento"
          className="pixel-button mt-8 bg-green-800 px-8 py-3 text-lg font-semibold text-white hover:bg-green-900"
        >
          Agendar serviço
        </Link>
      </section>

      <section className="grid gap-6 px-10 pb-20 md:grid-cols-3">
        <div className="pixel-card bg-white p-6 dark:bg-gray-900">
          <h3 className="pixel-title text-2xl font-bold text-green-800 dark:text-green-400">
            Banho e Tosa
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Higiene completa, tosa personalizada e cuidado especial.
          </p>
        </div>

        <div className="pixel-card bg-white p-6 dark:bg-gray-900">
          <h3 className="pixel-title text-2xl font-bold text-green-800 dark:text-green-400">
            Veterinário
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Atendimento profissional para cuidar da saúde do seu pet.
          </p>
        </div>

        <div className="pixel-card bg-white p-6 dark:bg-gray-900">
          <h3 className="pixel-title text-2xl font-bold text-green-800 dark:text-green-400">
            Pet Shop
          </h3>

          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Rações, brinquedos, acessórios e produtos de qualidade.
          </p>
        </div>
      </section>

      <section id="sobre" className="px-10 pb-24">
        <div className="pixel-card mx-auto max-w-4xl bg-white p-8 dark:bg-gray-900">
          <h2 className="pixel-title text-3xl font-bold text-green-800 dark:text-green-400">
            Sobre nós
          </h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300">
            A PetLife nasceu com o objetivo de oferecer cuidado, segurança e
            conforto para pets e tutores. Trabalhamos com serviços de banho,
            tosa, vacinação e atendimento veterinário, sempre priorizando o
            bem-estar dos animais.
          </p>
        </div>
      </section>
    </main>
  );
}