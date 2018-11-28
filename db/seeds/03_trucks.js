
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {vin: '2479', length: 2, owner: 3},
        {vin: '2010', length: 2, owner: 3},
        {vin: '2495', length: 2, owner: 3}
      ]);
    });
};
