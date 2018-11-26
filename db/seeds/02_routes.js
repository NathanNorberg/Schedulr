
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('routes').del()
    .then(function () {
      // Inserts seed entries
      return knex('routes').insert([
        {route_name: 'TJ', driver_id: 1, truck_id: 1, destination:'Trader Joes', pickup_time: '07:00:00', distance: 7},
        {route_name: 'BA', driver_id: 2, truck_id: 2, destination:'Bashes', pickup_time: '09:00:00', distance: 12},
        {route_name: 'FY', driver_id: 3, truck_id: 3, destination:'Frys', pickup_time: '01:00:00', distance: 9}      ]);
    });
};
