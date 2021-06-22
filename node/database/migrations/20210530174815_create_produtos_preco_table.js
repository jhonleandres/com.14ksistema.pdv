exports.up = function (knex, Promise) {
    return knex.schema.createTable('produtos_preco', (table) => {
        table.increments('id').primary();
        table.integer('produto_id')
            .unsigned()
            .notNullable();
        table.string('empresa')
            .unsigned()
            .notNullable();
        table.decimal('vlr_custo', 14,2);
        table.decimal('vlr_venda', 14,2);
        table.decimal('vlr_balanca', 14,2);
        table.enu('ativo', ['S', 'N'])
            .notNullable()
            .defaultTo('S');

        table.foreign('empresa')
            .references('cnpj')
            .inTable('empresa')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        table.foreign('produto_id')
            .references('id')
            .inTable('produtos')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('produtos_preco');
};