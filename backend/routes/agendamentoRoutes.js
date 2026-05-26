const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

const {
  criarAgendamento,
} = require("../controllers/agendamentoController");

router.post(
  "/agendamentos",
  auth,
  criarAgendamento
);

module.exports = router;