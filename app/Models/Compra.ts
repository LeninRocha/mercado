import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Produto from './Produto'
import Cliente from './Cliente'
import Funcionario from './Funcionario'

export default class Compra extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clienteId: number

  @column()
  public valorTotal: number

  @column()
  public dataHora: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Produto, {
    pivotTable: 'produto_compras'})
  public produtos: ManyToMany<typeof Produto>

  @belongsTo( ()=>Cliente )
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo( ()=>Funcionario )
  public funcionario: BelongsTo<typeof Funcionario>
}
