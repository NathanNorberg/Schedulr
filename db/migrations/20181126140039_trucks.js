
exports.up = function(knex, Promise) {
    return knex.schema.createTable('trucks', (table) => {
        table.increments();
        table.string('vin'); // unique id given by owner to identify truck
        table.integer('length'); // denotes length of wheelbase to determine if truck will fit in loading dock
        table.integer("owner") // used to associate truck to a specific owner
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
