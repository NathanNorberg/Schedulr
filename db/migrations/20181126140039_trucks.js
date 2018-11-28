
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trucks', (table) => {
        table.increments();
        table.string('truck_name');
        table.integer("user_id")
          .references("id")
          .inTable("users")
          .onDelete("CASCADE")
          .notNullable()
          .index();
        table.timestamps(true, true);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('trucks');
};
