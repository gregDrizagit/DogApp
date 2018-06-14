const bookshelf = require('../db/bookshelf');

const Dog = bookshelf.Model.extend({
  tableName: 'dogs' //gives us access to all of those query builder methods 
  //we use in the express routes
  // hasTimestamps: true
});

module.exports =  Dog; //exports the module