import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ProdutoCompra from 'App/Models/ProdutoCompra';

export default class extends BaseSeeder {
  public async run () {
    await ProdutoCompra.createMany([
      {
      produto_id: 1, 
      compra_id: 1, 
      qtd_produto: 2,
      valor_produto: 45, 
    },
    {
      produto_id: 9, 
      compra_id: 2, 
      qtd_produto: 3,
      valor_produto: 25, 
    },
    {
      produto_id: 11, 
      compra_id: 3, 
      qtd_produto: 1,
      valor_produto: 25, 
    },
    
    ])
  }
}