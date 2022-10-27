// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from "App/Models/Produto"

export default class ProdutosController {
    index(){
        return Produto.query()
    }
    
    store({request}){
        const dados = request.only(['nome', 'preco', 'categoria_id'])
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
        const resume =  await Produto.findOrFail(id)

        const dados = request.only(['nome', 'preco', 'categoria_id'])

        resume.merge(dados)
        return resume.save()
    }
}
