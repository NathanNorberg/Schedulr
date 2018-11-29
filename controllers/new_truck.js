const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.render("new_truck");
  },

  add: function(req, res) {
    knex("trucks").insert({
      vin: req.body.vin,
      length: req.body.length,
      owner: req.session.user.id
    }).then(() =>{
      res.redirect('/homepage')
    })
  }

}
