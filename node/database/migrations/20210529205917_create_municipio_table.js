exports.up = function (knex, Promise) {
    return knex.schema.createTable('municipio', (table) => {
      table.increments('id').primary();
      table.string('nome_cidade', 45)
        .notNullable()
        .unique()
        .index()
        .comment('Cidade');
      table.integer('estado_codigo', 11)
        .notNullable()
        .unique()
        .index()
        .comment('Codigo Estado');
      table.integer('codigo_municipio', 12)
        .notNullable()
        .unique()
        .index()
        .comment('Codigo Municipio');
      table.integer('estadoId').unsigned().notNullable();
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.foreign('estadoId')
        .references('id')
        .inTable('estado')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('municipio');
};