import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Fornecedor from './Fornecedor'
import Produto from './Produto'

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

  @belongsTo( ()=>Fornecedor )
  public fornecedor: BelongsTo<typeof Fornecedor>

  @belongsTo( ()=>Produto )
  public produto: BelongsTo<typeof Produto>
}
