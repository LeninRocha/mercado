import Route from '@ioc:Adonis/Core/Route'

Route.resource('/cargo', 'CargosController').apiOnly()
Route.resource('/categoria', 'CategoriasController').apiOnly()
Route.resource('/cliente', 'ClientesController ').apiOnly()
Route.resource('/compra', 'ComprasController').apiOnly()
Route.resource('/fornecedor', 'FornecedorsController').apiOnly()
Route.resource('/fornecimento', 'FornecimentosController').apiOnly()
Route.resource('/funcionario', 'FuncionariosController').apiOnly()
Route.resource('/produtos_compras', 'ProdutoComprasController').apiOnly()
Route.resource('/produtos', 'ProdutosController').apiOnly()
