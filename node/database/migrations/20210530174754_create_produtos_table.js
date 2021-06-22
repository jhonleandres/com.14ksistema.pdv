exports.up = function (knex, Promise) {
    return knex.schema.createTable('produtos', (table) => {
        table.increments('id').primary();
        table.string('descricao')
            .notNullable();



        // table.foreign('pais')
        //     .references('nome_pais')
        //     .inTable('pais')
        //     .onDelete('CASCADE')
        //     .onUpdate('CASCADE');
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('produtos');
};