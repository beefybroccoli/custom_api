
exports.up = function(knex, Promise) {
  return knex.schema 
    .createTable("users", table=>{
        table.uuid("id").primary().defaultTo(knex.raw("gen_random_uuid()"));
        table.string("username").notNull().unique();
        table.string("password").notNull();
    })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("users");
};
