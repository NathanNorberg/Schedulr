const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render("new_route");
  },

  add: function(req, res) {
    if(!Array.isArray(req.body.dates))
      req.body.dates = [req.body.dates];
    let promises = req.body.dates.map(date => {
      return knex('routes').insert({
        name: req.body.name,
        dock_length: 3,
        day: date,
        recurring: false,
        pickup_time: req.body.pickup_time,
        destination: req.body.destination,
        company_id: req.session.user.id,
        driver_id: undefined,
        truck_id: undefined
      })
    });
    Promise.all(promises).then(() => {
      res.redirect('/homepage');
    });
  },


}
