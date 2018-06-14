
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTableIfNotExists('dogs', (tbl) => {
        tbl.increments();
        tbl.string('name');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTableIfExists("dogs")
    ])
};
