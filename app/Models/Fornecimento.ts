import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Fornecimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  
  @column()
  public produto_id: number

  @column()
  public preco: number

  @column()
  public fornecedor_id: number

  @column()
  public datefornecimento: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
