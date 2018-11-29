const knex = require("../db/knex.js");
const scheduler = require('../config/utils/scheduler.js');

module.exports = {

  index: function(req, res) {
    // pull data from relevant tables returning as a Promise object
    let routePromise = knex('routes').where('company_id', req.session.user.id)
    let driverPromise = knex('drivers').where('bossman', req.session.user.id)
    let truckPromise = knex('trucks').where('owner', req.session.user.id)

    // wait for promises to resolve, avoids race condition
    Promise.all([routePromise, driverPromise, truckPromise])
      .then( (results) => {
        // extract data from the promises array that was processed by Promise.all
        let routes = results[0];
        let drivers = results[1];
        let trucks = results[2];
        console.log(routes);

        // pass data to homepage repackaged with 'readable' names
        res.render('homepage', {user: req.session.user, routes: routes, drivers: drivers, trucks: trucks});
      })
  },

  schedule: function(req, res) {
    res.redirect('/homepage');
  }
}
