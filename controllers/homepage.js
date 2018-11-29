const knex = require("../db/knex.js");
const scheduler = require('../config/utils/scheduler.js');

module.exports = {

  index: function(req, res) {
    // pull data from relevant tables returning as a Promise object
    let routePromise = knex('routes').where('company_id', req.session.user.id);
    let driverPromise = knex('drivers').where('bossman', req.session.user.id);
    let truckPromise = knex('trucks').where('owner', req.session.user.id);

    // wait for promises to resolve, avoids race condition
    Promise.all([routePromise, driverPromise, truckPromise])
      .then( (results) => {
        // extract data from the promises array that was processed by Promise.all
        let unassignedRoutes = results[0].filter(route => route.driver_id == null || route.truck_id == null);
        let assignedRoutes = results[0].filter(route => route.driver_id != null && route.truck_id != null);
        let drivers = results[1];
        let trucks = results[2];
        let monday = assignedRoutes.filter(route => route.day === 'mon');
        let tuesday = assignedRoutes.filter(route => route.day === 'tue');
        let wednesday = assignedRoutes.filter(route => route.day === 'wed');
        let thursday = assignedRoutes.filter(route => route.day === 'thur');
        let friday = assignedRoutes.filter(route => route.day === 'fri');
        let saturday = assignedRoutes.filter(route => route.day === 'sat');
        let sunday = assignedRoutes.filter(route => route.day === 'sun');
        // figure out how many routes appear on your busiest day
        let routeCount = Math.max(monday.length, tuesday.length, wednesday.length, thursday.length, friday.length, saturday.length, sunday.length);

        // pass data to homepage repackaged with 'readable' names
        res.render('homepage', {
          user: req.session.user,
          unassigned: unassignedRoutes,
          assigned: assignedRoutes,
          drivers: drivers,
          trucks: trucks,
          longestDay: routeCount,
          monday: monday,
          tuesday: tuesday,
          wednesday: wednesday,
          thursday: thursday,
          friday: friday,
          saturday: saturday,
          sunday: sunday
        });
      })
  },

  schedule: function(req, res) {
    // pull data from relevant tables returning as a Promise object
    let routePromise = knex('routes').where('company_id', req.session.user.id);
    let driverPromise = knex('drivers').where('bossman', req.session.user.id);
    let truckPromise = knex('trucks').where('owner', req.session.user.id);

    // wait for promises to resolve, avoids race condition
    Promise.all([routePromise, driverPromise, truckPromise])
      .then( results => {
        console.log(results[1]);
        return scheduler.createSchedule(results[0], results[1], results[2])
      })
      .then( (schedule) => {
        // console.log(schedule);
        let promiseChain = schedule.map( route => {
          // console.log(route);
          return knex('routes').where('id', route.id)
            .update({
              driver_id: route.driver_id,
              truck_id: route.truck_id
            })
        })
        
        Promise.all(promiseChain).then(() => {
          res.redirect('/homepage');
        })
      })

  }
}
