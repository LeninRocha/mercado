import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cargo from 'App/Models/Cargo'
export default class extends BaseSeeder {
  public async run () {
    await Cargo.createMany([
      {nome: 'Operador de caixa'},
      {nome: 'Açougueiro'},
      {nome: 'Vendedor'},
      {nome: 'Encarregado de estoque'},
      {nome: 'Repositor de mercadorias'},
      {nome: 'Entregador'},
      {nome: 'Empacotador'},
      {nome: 'Auxiliar de limpeza'},
      {nome: 'Ajudante geral'},
      {nome: 'Gerente'},
    ])
  }
}