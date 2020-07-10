const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const code = req.body.code;
    const event = await knex("evento").where("id", code);
    return res.json(event);
  },
};
