
exports.up = function(knex, Promise) {
    return Promise.all([
    knex.schema.createTableIfNotExists('dogs', (tbl) => {
        tbl.increments();
        tbl.string('name');
        tbl.string('img_url');
        })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('dogs')
    ])
};
