const knex = require("../db/knex.js");
const scheduler = require('../config/utils/scheduler.js');

module.exports = {

  index: function(req, res) {

    let routePromise = knex('routes').where('company_id', req.session.user.id)
    let driverPromise = knex('drivers').where('bossman', req.session.user.id)
    let truckPromise = knex('trucks').where('owner', req.session.user.id)

    Promise.all([routePromise, driverPromise, truckPromise])
      .then( (results) => {
        let routes = results[0];
        let drivers = results[1];
        let trucks = results[2];

        res.render('homepage', {routes: routes, drivers: drivers, trucks: trucks});
      })
  },

  schedule: function(req, res) {
    res.redirect('/homepage');
  }
}
