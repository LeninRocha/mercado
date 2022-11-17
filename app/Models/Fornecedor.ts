import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Fornecimento from './Fornecimento'

export default class Fornecedor extends BaseModel {
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

  @hasMany( ()=>Fornecimento )
  public fornecimentos: HasMany<typeof Fornecimento>
}

