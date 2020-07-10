const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const nome = req.body.nome;
    const event = await knex("evento").where("nome", "like", `%${nome}%`);
    return res.json(event);
  },
};
