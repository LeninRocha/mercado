import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Compra from 'App/Models/Compra'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  public async run () {
    await Compra.createMany([
      {
        clienteId: 2, 
        valorTotal: 100.97,
        dataHora: DateTime.fromSQL('2022-05-15 09:00'),
      },
      {
        clienteId: 1, 
        valorTotal: 2090.73,
        dataHora: DateTime.fromSQL('2022-01-18 13:00'),
      },
      {
        clienteId: 3, 
        valorTotal: 800.02,
        dataHora: DateTime.fromSQL('2022-11-11 14:20'),
      },
      
    ])
  }
}