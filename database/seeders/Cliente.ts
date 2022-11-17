import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'
export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
      nome: 'Samuel', 
      cpf: '060.791.255-88', 
      telefone: '61 99255-8549', 
      endereco: 'Qnn 27 modulo C bloco D apt 2555',
    },
    {
      nome: 'Pedro', 
      cpf: '060.458.248-21', 
      telefone: '61 98545-7894', 
      endereco: 'Qnm 12 conjunto D casa 45',
    },
    {
      nome: 'Valentina', 
      cpf: '055.200.325-55', 
      telefone: '61 94002-8922', 
      endereco: 'Qnn 24 conjunto A casa 25',
    },
    {
      nome: 'Lenin', 
      cpf: '458.245.125-50', 
      telefone: '61 92555-7894', 
      endereco: 'Qnn 20 conjunto C casa 12',
    },
    ])
  }
}