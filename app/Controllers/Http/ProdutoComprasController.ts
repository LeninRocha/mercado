// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProdutoCompra from "App/Models/ProdutoCompra"
import ProdutoCompraValidator from "App/Validators/ProdutoCompraValidator"

export default class ProdutoComprasController {
    index(){
        return ProdutoCompra.all()
    }
    
    async store({request}){
        const dados = await request.validate(ProdutoCompraValidator)
        return ProdutoCompra.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  ProdutoCompra.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  ProdutoCompra.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const produtoCompra =  await ProdutoCompra.findOrFail(id)

        const dados = request.only(['produtoId', 'compraId', 'qtdProduto', 'valorProduto'])

        produtoCompra.merge(dados)
        return produtoCompra.save()
    }
}
