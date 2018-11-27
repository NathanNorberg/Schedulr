
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('routes').del()
    .then(function () {
      // Inserts seed entries
      return knex('routes').insert([
        {route_name: 'TJ', destination:'Trader Joes', pickup_time: '07:00:00', distance: 7},
        {route_name: 'BA', destination:'Bashes', pickup_time: '09:00:00', distance: 12},
        {route_name: 'FY', destination:'Frys', pickup_time: '01:00:00', distance: 9}      ]);
    });
};
