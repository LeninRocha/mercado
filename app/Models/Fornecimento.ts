import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fornecimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public produtoId: number

  @column()
  public preco: number

  @column()
  public fornecedorId: number

  @column()
  public dataFornecimento: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
