exports.seed = function(knex) {
  return knex('products')
    .truncate()
    .then(function () {
      return knex('products').insert([
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cd1', name:"color shirt",description:"a very colorful shirt", price:11.99},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cd2', name:"pencil case",description:"a very strong case", price:11.99},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cd3', name:"water bottle",description:"a long lasting bottle", price:11.99},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cd4', name:"container box",description:"a wood box", price:11.99},
        {id: 'c8d992f7-79cc-46c0-a901-3d473a991cd5', name:"fish tank",description:"this tank can hold 5 fishes", price:11.99},
      ]);
    });
};
