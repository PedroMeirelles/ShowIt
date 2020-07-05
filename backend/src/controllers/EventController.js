const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const event = await knex("evento");
    return res.json(event);
  },

  async events(req, res) {
    const id = req.body.id;
    const event = await knex("evento").where("id", id);
    return res.json(event);
  },
};
