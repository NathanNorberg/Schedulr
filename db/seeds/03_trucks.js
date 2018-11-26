
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_name: 'short bus'},
        {truck_name: 'long bus'},
        {truck_name: 'big bus'}
      ]);
    });
};
