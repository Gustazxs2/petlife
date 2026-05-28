const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);

sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Auth service rodando na porta 3001");
  });
});