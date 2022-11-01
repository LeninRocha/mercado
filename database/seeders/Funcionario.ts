import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario';

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {
      nome: 'Deborah', 
      matricula: '00001', 
      email: 'debs123@gmail.com',
      telefone: '61 99485-8779', 
      cargoId: 2,
    },
    {
      nome: 'Lenin', 
      matricula: '00002', 
      email: 'leninrocha@gmail.com',
      telefone: '61 99478-1522', 
      cargoId: 3,
    },
    {
      nome: 'Samuel', 
      matricula: '00003', 
      email: 'fariasda19@gmail.com',
      telefone: '61 99562-8094', 
      cargoId: 10,
    },
    
    ])
  }
}