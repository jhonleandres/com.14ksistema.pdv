exports.up = function (knex, Promise) {
    return knex.schema.createTable('empresa', (table) => {
      table.increments('id').primary();
      table.string('razao', 255)
        .notNullable()
        .unique()
        .index();
      table.string('nome_fantasia', 255)
        .notNullable()
        .index();
      table.string('cnpj', 18)
        .notNullable()
        .unique()
        .index();
      table.string('ie', 14)
        .unique();
      table.string('im', 14)
        .unique();
      table.string('logradouro', 100)
        .notNullable();
      table.integer('numero', 11)
        .notNullable();
      table.string('complemento', 50)
        .notNullable();
      table.string('bairro', 50)
        .notNullable();
      table.string('estado').unsigned().notNullable();
      table.string('cidade').unsigned().notNullable();
      table.string('pais').unsigned().notNullable();
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
      table.enu('ativo', ['S', 'N']).notNullable().defaultTo('S')
        .comment('Status da Empresa Aberta ou Fechada');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    //   table.timestamp('updated_at').defaultTo(knex.raw('NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    });
};
  
exports.down = function (knex, Promise) {
    return knex.schema.dropTable('empresa');
};