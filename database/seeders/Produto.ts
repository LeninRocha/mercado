import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Produto from 'App/Models/Produto';

export default class extends BaseSeeder {
  public async run () {
    await Produto.createMany([
      {
      nome: 'Picanha', 
      preco: 45.5,
      categoriaId: 2,
    },
    {
      nome: 'Detergente', 
      preco: 3.7,
      categoriaId: 5,
    },
    {
      nome: 'Papel Higienico', 
      preco: 18.99,
      categoriaId: 4,
    },
    {
      nome: 'Queijo', 
      preco: 16.89,
      categoriaId: 1,
    },
    {
      nome: 'Coca Cola', 
      preco: 8.99,
      categoriaId: 10,
    },
    {
      nome: 'Sardinha', 
      preco: 6.50,
      categoriaId: 9,
    },
    ])
  }
}