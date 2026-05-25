# PetLife

# Desenvolvido por
  - Gustavo Felipe de Oliveira Brioso
  - Rafael Eduardo Queiroz da silveira
  - Cayo Ramon Lima da silva
  - Marcelo Henrique
  - Josué Elias de Melo Filho
  - Cláudio Henrique Beltrão Araujo


Sistema fullstack para gerenciamento de petshop desenvolvido com Next.js, Node.js, Express e PostgreSQL.

===

# Sobre o projeto

O PetLife foi desenvolvido com o objetivo de digitalizar o gerenciamento de serviços de petshop, permitindo cadastro de usuários, autenticação segura, visualização de produtos e agendamento online de serviços.

O sistema integra frontend, backend e banco de dados relacional através de API REST.

===

 # Funcionalidades

. Cadastro de usuários  
. Login com autenticação JWT  
. Criptografia de senhas com bcrypt  
. Catálogo de produtos  
. Carrinho de compras  
. Agendamento de serviços  
. Página de usuário  
. Integração com PostgreSQL  
. API REST  
. Arquitetura modular  

===

# Tecnologias utilizadas

## Frontend
- Next.js
- React
- TypeScript
- TailwindCSS
- React Hot Toast

## Backend
- Node.js
- Express
- Sequelize ORM
- JWT
- bcryptjs
- dotenv
- cors

## Banco de Dados
- PostgreSQL
- Supabase

## Deploy
- Vercel
- Render

===

#  Arquitetura do sistema

O sistema foi organizado em arquitetura monorepo, separando frontend e backend em módulos independentes.

```txt
PETLIFE/
├── frontend/
└── backend/
```

===

# Segurança

O sistema utiliza:

- JWT para autenticação
- bcrypt para criptografia de senhas
- Middleware de proteção de rotas
- Variáveis de ambiente para dados sensíveis

===

# API REST

## Usuários

### Cadastro
```http
POST /register
```

### Login
```http
POST /login
```

---

## Produtos

### Listar produtos
```http
GET /produtos
```

===

## Agendamentos

### Criar agendamento
```http
POST /agendamentos
```

### Listar agendamentos
```http
GET /agendamentos
```

===

# Arquitetura baseada em serviços

O backend foi dividido em serviços independentes por domínio de responsabilidade:

## Auth Service
Responsável por:
- Login
- Cadastro
- JWT
- Segurança

===

## roduct Service
Responsável por:
- Catálogo de produtos
- Visualização de produtos

===

## Scheduling Service
Responsável por:
- Agendamentos
- Gerenciamento de serviços

===

# Diagramas

## UML de Classes
- User
- Produto
- Agendamento

## Arquitetura
Frontend → Backend → PostgreSQL

===

# Executando o projeto localmente

## Clone o repositório

```bash
git clone https://github.com/Gustazxs2/petlife.git
```

===

# Frontend

```bash
cd frontend
npm install
npm run dev
```

===

# Backend

```bash
cd backend
npm install
npm start
```

===

#  Variáveis de ambiente

## Backend (.env)

```env
DATABASE_URL=URL_DO_SUPABASE
JWT_SECRET=petlife_secret
```

===

## Frontend (.env.local)

```env
NEXT_PUBLIC_API_URL=URL_DO_BACKEND_RENDER
```

===

#  Desenvolvido por

Projeto acadêmico desenvolvido para a disciplina de Desenvolvimento Web / Arquitetura de Software.

===

#  Licença

Projeto desenvolvido para fins educacionais.
