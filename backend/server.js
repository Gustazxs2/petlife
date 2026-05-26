
const authRoutes = require("./routes/authRoutes");


const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const sequelize = require("./config/database");

const User = require("./models/User");
const Produto = require("./models/Produto");
const Agendamento = require("./models/Agendamento");

const auth = require("./middleware/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use(authRoutes);


async function criarProdutosPadrao() {
  const quantidade = await Produto.count();

  if (quantidade === 0) {
    await Produto.bulkCreate([
      {
        nome: "Ração Premium",
        categoria: "Alimentação",
        preco: 89.9,
        descricao: "Ração nutritiva para cães adultos.",
        imagem:
          "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=600&q=80",
      },

      {
        nome: "Shampoo Pet",
        categoria: "Higiene",
        preco: 29.9,
        descricao: "Shampoo suave para banho e cuidado dos pelos.",
        imagem:
          "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=600&q=80",
      },

      {
        nome: "Coleira Confort",
        categoria: "Acessórios",
        preco: 39.9,
        descricao: "Coleira confortável e resistente para passeios.",
        imagem:
          "https://plus.unsplash.com/premium_photo-1692392181661-96c4b34759db?auto=format&fit=crop&w=600&q=80",
      },

      {
        nome: "Brinquedo Mordedor",
        categoria: "Brinquedos",
        preco: 24.9,
        descricao: "Mordedor divertido para cães de todos os portes.",
        imagem:
          "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?auto=format&fit=crop&w=600&q=80",
      },
    ]);

    console.log("Produtos cadastrados no banco.");
  }
}

app.get("/", (req, res) => {
  res.send("API PetLife rodando 🐶");
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await Produto.findAll();

    res.json(produtos);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Erro ao buscar produtos.",
    });
  }
});





app.get("/agendamentos", auth, async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();

    res.json(agendamentos);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Erro ao buscar agendamentos.",
    });
  }
});

app.post("/agendamentos", auth, async (req, res) => {
  try {
    const { nomePet, data, servico, userEmail } = req.body;

    if (!nomePet || !data || !servico || !userEmail) {
      return res.status(400).json({
        message: "Todos os campos são obrigatórios.",
      });
    }

    const agendamento = await Agendamento.create({
      nomePet,
      data,
      servico,
      userEmail,
    });

    res.status(201).json({
      message: "Agendamento realizado com sucesso!",
      agendamento,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Erro ao criar agendamento.",
    });
  }
});

sequelize
  .sync({ alter: true })
  .then(async () => {
    console.log("Banco conectado com sucesso!");

    await criarProdutosPadrao();

    app.listen(3001, () => {
      console.log("Servidor rodando na porta 3001");
    });
  })
  .catch((error) => {
    console.log("ERRO NO BANCO:");
    console.log(error);
  });