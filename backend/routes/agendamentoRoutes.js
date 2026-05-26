const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  criarAgendamentos,
  buscarAgendamentos,
} = require("../controllers/agendamentoController");

router.get(
  "/agendamentos",
  auth,
  buscarAgendamentos
);

router.post(
  "/agendamentos",
  auth,
  criarAgendamentos
);

module.exports = router;