PETLIFE 🐾
Sistema fullstack para gerenciamento de petshop desenvolvido com arquitetura baseada em microsserviços, autenticação JWT e interface moderna utilizando Next.js.

📌 Sobre o Projeto
O PetLife é uma plataforma desenvolvida com foco em gerenciamento de serviços para petshops, permitindo o controle de:
autenticação de usuários;
gerenciamento de produtos;
agendamentos;
integração entre frontend e APIs;
persistência em banco de dados PostgreSQL/Supabase.
O projeto foi desenvolvido como atividade acadêmica, aplicando conceitos modernos de desenvolvimento web e engenharia de software.

🚀 Tecnologias Utilizadas
Frontend
Next.js
React
TypeScript
TailwindCSS
Backend
Node.js
Express.js
JWT Authentication
Bcrypt
Sequelize ORM
Banco de Dados
PostgreSQL
Supabase

🏗️ Arquitetura do Projeto
Plain text
PETLIFE/
│
├── frontend/
│
├── auth-service/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── config/
│
├── product-service/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── config/
│
├── scheduling-service/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   └── config/
│
└── README.md
✨ Funcionalidades
🔐 Autenticação
Cadastro de usuários
Login com JWT
Proteção de rotas
Criptografia de senha com bcrypt

📦 Produtos
Cadastro de produtos
Listagem de produtos
Atualização de informações
Exclusão de produtos

📅 Agendamentos
Criação de agendamentos
Controle de serviços
Organização de horários

🌐 Deploy
Frontend hospedado na Vercel:
🔗 https://petlife-seven-alpha.vercel.app/⁠�

⚙️ Instalação
1. Clone o repositório
Bash
git clone https://github.com/seu_usuario/petlife.git
2. Acesse a pasta do projeto
Bash
cd petlife
🔧 Configuração das Variáveis de Ambiente
Crie um arquivo .env em cada serviço backend.
Exemplo:
Environment
PORT=3000

DATABASE_URL=your_database_url

JWT_SECRET=your_secret_key
📦 Instalação das Dependências
Frontend
Bash
cd frontend
npm install
Auth Service
Bash
cd auth-service
npm install
Product Service
Bash
cd product-service
npm install
Scheduling Service
Bash
cd scheduling-service
npm install
▶️ Executando o Projeto
Frontend
Bash
npm run dev
Backend Services
Execute em cada serviço:
Bash
npm run dev
🔒 Segurança
O projeto utiliza:
autenticação JWT;
hash de senhas com bcrypt;
variáveis de ambiente protegidas;
separação de serviços por responsabilidade.
📚 Conceitos Aplicados
Arquitetura em microsserviços
API REST
Autenticação e autorização
Integração frontend/backend
ORM com Sequelize
Responsividade
Organização modular de código
👨‍💻 Desenvolvedores
Gustavo Felipe de Oliveira Brioso.

Rafael Eduardo Queiroz da Silva.

Cayo  Ramon Lima da Silva 

Marcelo Henrique 

josué Elias de Melo Filho 

Cláudio Henrique Beltrão Araújo

André Luiz Gomes Menezes
📄 Licença
Este projeto foi desenvolvido para fins acadêmicos.
