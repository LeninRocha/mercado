import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Compra from 'App/Models/Compra'

export default class extends BaseSeeder {
  public async run () {
    await Compra.createMany([
      {
        clienteId: 2, 
        valorTotal: 100,
        date: new Date(2022/11/11),
      },
      
    ])
  }
}