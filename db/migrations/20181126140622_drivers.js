
exports.up = function(knex, Promise) {
    return knex.schema.createTable('drivers', (table) => {
        table.increments();
        table.string('name'); // driver's name
        table.integer('wage'); // hourly wage
        table.days('daysOff');  // array of days off?
        table.integer("bossman")
            .references("id")
            .inTable("users")
            .onDelete("CASCADE")
            .notNullable()
            .index();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('drivers');
};
