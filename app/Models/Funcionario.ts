import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Cargo from './Cargo'
import Cliente from './Cliente'

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

  @manyToMany(() => Cliente, {
    pivotTable: 'compras'})
  public clientes: ManyToMany<typeof Cliente>

  @belongsTo( ()=>Cargo )
  public cargo: BelongsTo<typeof Cargo>
}
