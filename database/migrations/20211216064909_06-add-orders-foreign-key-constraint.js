
exports.up = function(knex, Promise) {
    return knex.schema
        .alterTable("orders", table=>{
            table.foreign("user_id").references("id").inTable("users");
        })
};

exports.down = function(knex, promise) {
    return knex.schema 
    .alterTable("orders", table=>{
        table.dropForeign('user_id');
    })
};
