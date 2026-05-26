const Produto = require("../models/Produto");

exports.listarProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();

    res.json(produtos);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Erro ao buscar produtos.",
    });
  }
};