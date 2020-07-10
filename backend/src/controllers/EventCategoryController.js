const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const categoria = req.body.category;
    const event = await knex("evento").where("categoria", categoria);
    return res.json(event);
  },
};
