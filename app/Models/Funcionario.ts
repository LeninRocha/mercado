import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Compra from './Compra'
import Cargo from './Cargo'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public matricula: string
  
  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public cargoId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=>Compra )
  public compras: HasMany<typeof Compra>

  @belongsTo( ()=>Cargo )
  public cargo: BelongsTo<typeof Cargo>
}
