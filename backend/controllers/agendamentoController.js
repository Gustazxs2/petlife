const Agendamento = require("../models/Agendamento");

exports.buscarAgendamento = async (req, res) => {
  try {
    const agendamentos = await Agendamento.findAll();

    res.json(agendamentos);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Erro ao buscar agendamentos.",
    });
  }
};

exports.criarAgendamentos = async(req, res) => {
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
};