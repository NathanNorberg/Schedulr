
exports.up = function(knex, Promise) {
    return knex.schema.createTable('routes', (table) => {
        table.increments();
        table.string('route_name');
        table.integer("driver_id")
          .references("id")
          .inTable("drivers")
          .onDelete("CASCADE")
          .index();
        table.integer("truck_id")
          .references("id")
          .inTable("trucks")
          .onDelete("CASCADE")
          .index();
        table.string('destination');
        table.time('pickup_time');
        table.integer('distance');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('routes');
};
