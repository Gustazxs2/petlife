const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  criarAgendamento,
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
  criarAgendamento
);

module.exports = router;