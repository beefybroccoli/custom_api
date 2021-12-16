
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("products", table=>{
            table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
            table.string("name").notNull();
            table.string("description").notNull();
            table.decimal("price").notNull();
        })
};

exports.down = function(knex) { 
    return knex.schema
        .dropTableIfExists("products");
};
