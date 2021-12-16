
exports.up = function(knex, Promise) {
    return knex.schema
      .alterTable("profiles", table=>{
          table.foreign("user_id").references("id").inTable("users");
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema 
        .alterTable("profiles", table=>{
            table.dropForeign('user_id');
        })
  };
  