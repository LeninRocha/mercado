import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'fornecedors'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cnpj', 14).notNullable()
      table.string('nome', 100).notNullable()
      table.string('telefone', 11).notNullable()
      table.string('email', 50)
      table.integer('cep', 8).notNullable()
      table.string('logradouro', 100)
      table.string('complemento', 100)
      table.integer('numero', 3)
      table.string('bairro', 100)


      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
