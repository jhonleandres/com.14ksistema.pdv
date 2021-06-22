
exports.up = function (knex, Promise) {
    return knex.schema.createTable('pais', (table) => {
      table.increments('id').primary();
      table.string('nome_pais', 100)
        .notNullable()
        .unique()
        .index()
        .comment('Nome Pais');
      table.integer('pais_codigo', 5)
        .notNullable()
        .unique()
        .index()
        .comment('Codigo Pais');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      // table.timestamp('updated_at').defaultTo(knex.raw('ON UPDATE CURRENT_TIMESTAMP'));
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('pais');
};
