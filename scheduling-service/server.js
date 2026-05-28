const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");

const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

const agendamentoRoutes = require("./routes/agendamentoRoutes");

app.use(agendamentoRoutes);


sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log("agendamento service rodando na porta 3003");
  });
});