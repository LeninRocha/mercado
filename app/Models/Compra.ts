import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Compra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cliente_id: number

  @column()
  public valor_total: number

  @column()
  public date: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
