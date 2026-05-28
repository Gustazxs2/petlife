const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/database");

const app = express();

app.use(cors());
app.use(express.json());

const produtoRoutes = require("./routes/produtoRoutes");

app.use(produtoRoutes);


sequelize.sync().then(() => {
  app.listen(3002, () => {
    console.log("Product service rodando na porta 3002");
  });
});