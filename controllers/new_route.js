const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("new_route");
  },

  add: function(req, res) {
    knex("new_route").insert({
      route_name: req.body.route_name,
      driver_id: req.body.driver_id,
      truck_id: req.body.truck_id,
      destination: req.body.destination,
      pickup_time: req.body.pickup_time,
      distance: req.body.distance,
      days: req.body.days,
    }).then(() =>{
      res.redirect('/homepage')
    })
  },


}
