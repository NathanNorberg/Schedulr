
exports.up = function(knex, Promise) {
    return knex.schema.createTable('drivers', (table) => {
        table.increments();
        table.string('driver_firstname');
        table.string('driver_lastname');
        table.text('img_url');
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('drivers');
};
