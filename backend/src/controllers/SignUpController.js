const knex = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { name, email, password } = req.body;
    const signin = await knex("usuario").insert({
      email: email,
      nome: name,
      senha: password,
    });
    return res.json({ signin });
  },
};
