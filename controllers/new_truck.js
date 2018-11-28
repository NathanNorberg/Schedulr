const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("new_truck");
  },

  add: function(req, res) {
    knex("trucks").insert({
      truck_name: req.body.truck_name,
    }).then(() =>{
      res.redirect('/homepage')
    })
  }

}
