const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const event = await knex("evento");
    return res.json(event);
  },
};
