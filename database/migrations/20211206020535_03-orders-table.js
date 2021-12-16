
exports.up = function(knex, Promise) {
    return knex.schema
        .createTable("orders", table=>{
            table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
            table.integer("order_number").notNull();
            table.uuid("product_id").notNull();
            table.integer("quantity").notNull();
            table.string("status").notNull();
            table.uuid("user_id").notNull();
            // table.foreign("user_id").references("id").inTable("users"); //pending delete
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("orders");
};
