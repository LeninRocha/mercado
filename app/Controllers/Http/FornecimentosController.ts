// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecimento from "App/Models/Fornecimento"
import FornecimentoValidator from "App/Validators/FornecimentoValidator"

export default class FornecimentosController {
    index(){
        return Fornecimento.all()
    }
    
    async store({request}){
        const dados = await request.validate(FornecimentoValidator)
        return Fornecimento.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  Fornecimento.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  Fornecimento.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const fornecimento =  await Fornecimento.findOrFail(id)

        const dados = request.only(['produtoId', 'preco', 'fornecedorId', 'dataFornecimento'])

        fornecimento.merge(dados)
        return fornecimento.save()
    }
}
