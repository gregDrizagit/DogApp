const config = require('../knexfile.js');
var knex = require('knex')(config['development']);//connects bookshelf and knex
var bookshelf = require('bookshelf')(knex);
module.exports = bookshelf;