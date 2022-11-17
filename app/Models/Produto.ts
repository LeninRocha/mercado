import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Categoria from './Categoria'
import Fornecimento from './Fornecimento'
import Compra from './Compra'

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

  @hasMany( ()=>Fornecimento )
  public fornecimentos: HasMany<typeof Fornecimento>

  @manyToMany(() => Compra, {
    pivotTable: 'produto_compras'})
  public compras: ManyToMany<typeof Compra>
}
