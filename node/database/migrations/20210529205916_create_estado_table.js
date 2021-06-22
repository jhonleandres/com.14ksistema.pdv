exports.up = function (knex, Promise) {
    return knex.schema.createTable('estado', (table) => {
    table.increments('id').primary();
    table.integer('ibge', 11)
        .notNullable()
        .unique()
        .index()
        .comment('Nº IBGE');
    table.string('descricao', 100)
        .notNullable()
        .unique()
        .index()
        .comment('Descricao');
    table.string('sigla', 2)
        .notNullable()
        .unique()
        .index()
        .comment('Sigla');
    table.integer('paisId').unsigned().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    //   table.timestamp('updated_at').defaultTo(knex.raw('NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.foreign('paisId')
        .references('id')
        .inTable('pais')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('estado');
};