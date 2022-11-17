import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'

export default class Fornecedor extends BaseModel {

  public static table = 'fornecedores'

  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public cnpj: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public cep: string

  @column()
  public logradouro: string

  @column()
  public complemento: string

  @column()
  public numero: number

  @column()
  public bairro: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Produto, {
    pivotTable: 'fornecimentos'})
  public fornecimentos: ManyToMany<typeof Produto>
}

