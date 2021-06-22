exports.up = function (knex, Promise) {
    return knex.schema.createTable('usuario', (table) => {
      table.increments('id')
        .primary();
      table.string('nome')
        .notNullable();
      table.string('sobrenome')
        .notNullable();
      table.string('cpfcnpj')
        .notNullable();
      table.string('rg')
        .notNullable();
      table.string('login')
        .notNullable()
        .unique();
      table.string('senha')
        .notNullable();
      table.boolean('desconto')
        .notNullable()
        .defaultTo(false);
      table.enu('ativo', ['S', 'N'])
        .notNullable()
        .defaultTo('S');
      table.string('logradouro', 100)
        .notNullable();
      table.integer('numero', 11)
        .notNullable();
      table.string('complemento', 50)
        .notNullable();
      table.string('bairro', 50)
        .notNullable();
      table.string('estado')
        .unsigned()
        .notNullable();
      table.string('cidade')
        .unsigned()
        .notNullable();
      table.string('pais')
        .unsigned()
        .notNullable();
      table.integer('cep', 8)
        .notNullable();
      table.string('responsavel', 50)
        .notNullable();
      table.string('fone', 10)
        .notNullable();
      table.string('email', 100)
        .notNullable();
      table.string('contador', 50)
        .notNullable();
      table.foreign('estado')
        .references('sigla')
        .inTable('estado')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.foreign('cidade')
        .references('nome_cidade')
        .inTable('municipio')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.foreign('pais')
        .references('nome_pais')
        .inTable('pais')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.timestamp('created_at')
        .defaultTo(knex.fn.now());
    //   table.timestamp('updated_at').defaultTo(knex.raw('DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP'));
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('usuario');
};