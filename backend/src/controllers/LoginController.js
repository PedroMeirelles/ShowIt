const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { email } = req.body;
    const password = await knex("usuario")
      .select("senha")
      .where("email", email);
    return res.json({ password });
  },
};
