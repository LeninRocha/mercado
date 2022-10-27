// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecimento from "App/Models/Fornecimento"

export default class FornecimentosController {
    index(){
        return Fornecimento.query()
    }
    
    store({request}){
        const dados = request.only(['preco', 'fornecedor_id', 'datefornecimento'])
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
        const resume =  await Fornecimento.findOrFail(id)

        const dados = request.only(['preco', 'fornecedor_id', 'datefornecimento'])

        resume.merge(dados)
        return resume.save()
    }
}
