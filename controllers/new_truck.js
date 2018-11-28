const knex = require("../db/knex.js");

module.exports = {
  index: function(req, res) {
    res.render("new_truck");
  },

  add: function(req, res) {
    // update route to reflect tables latest version
    // add id to registrer truck to current session user only
    knex("trucks").insert({
      truck_name: req.body.truck_name,
      user_id: req.session.user.id
    }).then(() =>{
      res.redirect('/homepage')
    })
  }

}
