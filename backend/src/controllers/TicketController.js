const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const ticket = await knex("ticket")
      .join("evento", "ticket.fk_evento", "=", "evento.id")
      .select("evento.*");

    return res.json(ticket);
  },

  async create(req, res) {
    const { fk_usuario, fk_evento } = req.body;
    const ticket = await knex("ticket").insert({
      fk_usuario: fk_usuario,
      fk_evento: fk_evento,
    });
    return res.json({ ticket });
  },
};
