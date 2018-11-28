
exports.up = function(knex, Promise) {
    return knex.schema.createTable('routes', (table) => {
        table.increments();
        table.string('name'); // store name used for display purposes
        table.integer('dock_length'); // length requirement for dock, used to determine if a vehicle fits
        table.string('day'); // specific day of route instance
        table.boolean('recurring') // specifies if a route repeats in following weeks
        table.time('pickup_time'); // time at which route is scheduled
        table.string('destination'); // drop-off location for route
        table.integer("company_id") // id of company that manages scheduling of route
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .notNullable()
          .index();
        table.integer("driver_id") // id of assigned driver, starts 'undefined' until assignment occurs
          .references("id")
          .inTable("drivers")
          .onDelete("CASCADE")
          .index();
        table.integer("truck_id") // id of truck assigned to route, starts 'undefined' until assignment occurs
          .references("id")
          .inTable("trucks")
          .onDelete("CASCADE")
          .index();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('routes');
};
