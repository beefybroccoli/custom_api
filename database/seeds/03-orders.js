exports.seed = function(knex) {
  return knex('orders')
    .truncate()
    .then(function () {
      return knex('orders').insert([
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cc1', order_number:1, product_id:'c8d992f7-79cc-46c0-a901-3d473a991cd1', quantity:5, status:"pending",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca1'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cc2', order_number:1, product_id:'c8d992f7-79cc-46c0-a901-3d473a991cd2', quantity:5, status:"pending",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca2'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cc3', order_number:2, product_id:'c8d992f7-79cc-46c0-a901-3d473a991cd3', quantity:5, status:"pending",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca3'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cc4', order_number:2, product_id:'c8d992f7-79cc-46c0-a901-3d473a991cd4', quantity:5, status:"pending",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca4'},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cc5', order_number:3, product_id:'c8d992f7-79cc-46c0-a901-3d473a991cd5', quantity:5, status:"pending",user_id:'c8d992f7-79cc-46c0-a901-3d473a991ca5'},
      ]);
    });
};
