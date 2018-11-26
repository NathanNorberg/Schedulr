
exports.up = function(knex, Promise) {
    return knex.schema.createTable('routes', (table) => {
        table.increments();
        table.string('route_name');
        table.string('driver_id');
        table.string('destination');
        table.time('pickup_time');
        table.integer('distance')
        table.string('days')
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('routes');
};
