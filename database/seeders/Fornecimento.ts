import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecimento from 'App/Models/Fornecimento'

export default class extends BaseSeeder {
  public async run () {
    await Fornecimento.createMany([
      {
        produtoId: 2, 
        preco: 3,
        fornecedorId: 1,
        dataFornecimento: new Date(2022, 11, 5),
      },
      {
        produtoId: 1, 
        preco: 45,
        fornecedorId: 2,
        dataFornecimento: new Date(2022, 7, 4),
      },
      {
        produtoId: 1, 
        preco: 45,
        fornecedorId: 2,
        dataFornecimento: new Date(2022, 7, 2),
      },
    ])
  }
}