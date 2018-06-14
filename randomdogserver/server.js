const express = require('express'); //Require express server
const app = express() //create express app
var sqlite3 = require('sqlite3') //Require sqlite3 db
const knex = require('knex');
const Dog = require('./models/dog');//require dogs bookshelf models
const bodyParser = require("body-parser"); 
//require body pareser. This allows us to easily access data sent through the body

var sqlite = new sqlite3.Database('dogserver.sqlite3') //create sqlite database file


app.use(bodyParser.urlencoded({//apply bodyParser to express
  extended: true
}));
app.use(bodyParser.json({ type: 'application/json' }))//parse body data as json


const config = require('./knexfile');//require knex configuration file
const db = knex(config['development']); //connect knex to node development environment in package.json

app.get('/dogs', (req, res) => {
  //sets up express get request route 
    Dog //fetchAll() puts together a sql query to get all rows from Dog table
    .fetchAll()
    .then((results) => {//sends back the results of fetchAll()
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
})

app.get('/dogs/:name', (req, res) => {
  //this route gets a dog row by name. Typically this is done with a row ID
  // because there could be duplicate names. 
    Dog
    .forge({name: req.params.name})//get the name from the header
    .fetch()
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    })
})

// knex('accounts')
// .where('activated', false)
// .del()

app.post('/dog', (req, res) => {
  //posts dog to the db and sends back the new object
    Dog 
    .forge(req.body)
    .save()
    .then((post) => {
      console.log(post)
      res.send(post);
    })
    .catch((error) => {
      console.error(error);
      return res.sendStatus(500);
    });
})



app.listen(3000)