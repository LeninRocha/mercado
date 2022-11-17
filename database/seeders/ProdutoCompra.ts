import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoCompra from 'App/Models/ProdutoCompra';

export default class extends BaseSeeder {
  public async run () {
    await ProdutoCompra.createMany([
      {
      produtoId: 1, 
      compraId: 1, 
      qtdProduto: 2,
      valorProduto: 45, 
    },
    {
      produtoId: 6, 
      compraId: 2, 
      qtdProduto: 3,
      valorProduto: 25, 
    },
    {
      produtoId: 3, 
      compraId: 3, 
      qtdProduto: 1,
      valorProduto: 25, 
    },
    
    ])
  }
}