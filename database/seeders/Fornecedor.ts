import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Fornecedor from 'App/Models/Fornecedor'
export default class extends BaseSeeder {
  public async run () {
    await Fornecedor.createMany([
      {
        cnpj: '02.782.835/0001-26',
        nome: 'Paulo Vieira', 
        telefone: '3355-8422',
        email: 'friosgas@gmail.com',
        cep: 72456-847,
        logradouro: 'Qnn 6 conjunto B casa 19',
        complemento: 'Conjunto B',
        numero: 19,
        bairro: 'Ceilandia Sul' 
      },
      {
        cnpj: '05.222.495/0001-45',
        nome: 'Lenin Rocha', 
        telefone: '5425-8955',
        email: 'açouguerocha@gmail.com',
        cep: 72224-574,
        logradouro: 'Qnn 19 conjunto g casa 25',
        complemento: 'Conjunto G',
        numero: 25,
        bairro: 'Ceilandia Norte'  
      },
      {
        cnpj: '02.754.452/0001-22',
        nome: 'Ricardo Pão', 
        telefone: '3398-4958',
        email: 'paofrances@gmail.com',
        cep: 72224-453,
        logradouro: 'Qnm 14 conjunto D loja 14',
        complemento: 'loja 14',
        numero: 14,
        bairro: 'Ceilandia Centro'  
      },
      {
        cnpj: '02.754.222/0001-15',
        nome: 'Coca Cola', 
        telefone: '3329-4952',
        email: 'cocacolaoficial@gmail.com',
        cep: 72224-453,
        logradouro: 'CGS 06 lote 1/2 Taguatinga',
        complemento: 'lote 1 e 2',
        numero: 6,
        bairro: 'Taguatinga Sul'  
      },
      
    ])
  }
}