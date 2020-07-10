const knex = require("../database/connection");
module.exports = {
  async index(req, res) {
    const { email } = req.body;
    const signin = await knex("usuario").where("email", email);
    return res.json({ signin });
  },
};
