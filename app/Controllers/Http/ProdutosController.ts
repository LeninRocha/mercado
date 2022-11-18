// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"
import ProdutoValidator from "App/Validators/ProdutoValidator"

export default class ProdutosController {
    index(){
        return Produto.query().preload('fornecedores')
                                .preload('compras')
                                .paginate(1, 2)
    }
    
    async store({request}){
        const dados = await request.validate(ProdutoValidator)
        return Produto.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  Produto.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  Produto.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const produto =  await Produto.findOrFail(id)

        const dados = request.only(['nome', 'preco', 'categoriaId'])

        produto.merge(dados)
        return produto.save()
    }
}
