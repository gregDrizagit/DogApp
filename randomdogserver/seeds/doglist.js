
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('dogs').del()
    .then(function () {
      // Inserts seed entries
      return knex('dogs').insert([
        {name: 'Fuzz'},
        {name: 'Teddy'},
        {name: 'Cookie'}, 
        {name: 'Oliver'}, 
        {name: 'Fritz'}
      ]);
    });
};

//seeds databse with initial objects
