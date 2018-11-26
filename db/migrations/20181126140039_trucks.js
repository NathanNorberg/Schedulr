
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trucks', (table) => {
        table.increments();
        table.string('truck_name');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('trucks');
};
