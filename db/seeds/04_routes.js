
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('routes').del()
    .then(function () {
      // Inserts seed entries
      return knex('routes').insert([
        {name: 'TJ108', dock_length: 3, day: 'mon', recurring: false, pickup_time: '01:30:00', destination: 'Valencia, CA', company_id: 3},
        {name: 'TJ108', dock_length: 3, day: 'tue', recurring: false, pickup_time: '01:30:00', destination: 'Valencia, CA', company_id: 3},
        {name: 'TJ108', dock_length: 3, day: 'wed', recurring: false, pickup_time: '01:30:00', destination: 'Valencia, CA', company_id: 3},
        {name: 'TJ108', dock_length: 3, day: 'thur', recurring: false, pickup_time: '01:30:00', destination: 'Valencia, CA', company_id: 3},
        {name: 'TJ108', dock_length: 3, day: 'fri', recurring: false, pickup_time: '01:30:00', destination: 'Valencia, CA', company_id: 3},
        {name: 'TJ108', dock_length: 3, day: 'sat', recurring: false, pickup_time: '01:30:00', destination: 'Valencia, CA', company_id: 3}
      ]);
    });
};
