import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Compra from './Compra'
import Fornecedor from './Fornecedor'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public preco: number

  @column()
  public categoriaId: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=>Categoria )
  public categoria: BelongsTo<typeof Categoria>

  @manyToMany(() => Fornecedor, {
    pivotTable: 'fornecimentos'})
  public fornecimentos: ManyToMany<typeof Fornecedor>

  @manyToMany(() => Compra, {
    pivotTable: 'produto_compras'})
  public compras: ManyToMany<typeof Compra>
}
