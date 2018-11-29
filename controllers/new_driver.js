const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.render("new_driver");
  },

  add: function(req, res) {
    // update route to reflect tables latest version
    knex("drivers").insert({
      name: req.body.name,
      img_url: req.body.img_url,
      wage: req.body.wage,
      daysOff: req.body.daysOff,
      bossman: req.params.id
    }).then(() =>{
      res.redirect('/homepage')
    })
  }



}
