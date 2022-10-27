// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ProdutoCompra from "App/Models/ProdutoCompra"

export default class ProdutoComprasController {
    index(){
        return ProdutoCompra.query()
    }
    
    store({request}){
        const dados = request.only(['qtd_produto', 'valor_produto', 'produto_id'])
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
        const resume =  await ProdutoCompra.findOrFail(id)

        const dados = request.only(['qtd_produto', 'valor_produto', 'produto_id'])

        resume.merge(dados)
        return resume.save()
    }
}
