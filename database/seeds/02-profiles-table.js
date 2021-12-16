exports.seed = function(knex) {
  return knex('profiles')
    .truncate()
    .then(function () {
      return knex('profiles').insert([
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cb1', first_name:"tom", last_name:"tom", middle_name:"", email:"tomtom@mail.com", user_type:"admin",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca1'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cb2', first_name:"hank", last_name:"jimmy", middle_name:"charlie", email:"hankjimy@mail.com", user_type:"user",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca2'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cb3', first_name:"mason", last_name:"john", middle_name:"", email:"masonjohn@mail.com", user_type:"user",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca3'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cb4', first_name:"noob", last_name:"player", middle_name:"", email:"noobplayer@mail.com", user_type:"user",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca4'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cb5', first_name:"kite", last_name:"air", middle_name:"", email:"kiteair@mail.com", user_type:"user",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca5'},
      ]);
    });
};
