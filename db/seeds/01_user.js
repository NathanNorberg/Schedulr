
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {user_name: 'Nathan Norberg', user_email: 'nathan@gmail.com', user_password: 'value'},
        {user_name: 'Harrison Vannort', user_email: 'harrison@gmail.com', user_password: 'value'},
        {user_name: 'Oscar Sandoval', user_email: 'oscar@gmail.com', user_password: 'value'}
      ]);
    });
};
