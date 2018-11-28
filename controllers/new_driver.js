const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.render("new_driver");
  },

  add: function(req, res) {
    // update route to reflect tables latest version
    knex("drivers").insert({
      driver_firstname: req.body.driver_firstname,
      driver_lastname: req.body.driver_lastname,
      img_url: req.body.img_url,
      user_id: req.params.id
    }).then(() =>{
      res.redirect('/homepage')
    })
  }



}
