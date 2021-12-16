exports.seed = function(knex) {
  return knex('users')
    .truncate()
    .then(function () {
      return knex('users').insert([
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991ca1', username:"user1", password:"password1"},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991ca2', username:"user2", password:"password2"},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991ca3', username:"user3", password:"password3"},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991ca4', username:"user4", password:"password4"},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991ca5', username:"user5", password:"password5"},
      ]);
    });
};
