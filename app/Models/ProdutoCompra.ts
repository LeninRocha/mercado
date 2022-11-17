import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class ProdutoCompra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public produtoId: number

  @column()
  public compraId: number

  @column()
  public qtdProduto: number

  @column()
  public valorProduto: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
