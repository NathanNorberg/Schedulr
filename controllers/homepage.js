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
        let unassignedRoutes = results[0].filter(route => route.driver_id == null || route.truck_id == null);
        let assignedRoutes = results[0].filter(route => route.driver_id != null && route.truck_id != null);
        let drivers = results[1];
        let trucks = results[2];
        // figure out how many routes appear on your busiest day
        let longestDay = Math.max(
          assignedRoutes.filter(route => route.day === 'mon').length,
          assignedRoutes.filter(route => route.day === 'tue').length,
          assignedRoutes.filter(route => route.day === 'wed').length,
          assignedRoutes.filter(route => route.day === 'thur').length,
          assignedRoutes.filter(route => route.day === 'fri').length,
          assignedRoutes.filter(route => route.day === 'sat').length,
          assignedRoutes.filter(route => route.day === 'sun').length
        )
        console.log(longestDay);


        // pass data to homepage repackaged with 'readable' names
        res.render('homepage', {user: req.session.user, assigned: assignedRoutes, unassigned: unassignedRoutes, drivers: drivers, trucks: trucks, routeCount: longestDay});
      })
  },

  schedule: function(req, res) {
    res.redirect('/homepage');
  }
}
