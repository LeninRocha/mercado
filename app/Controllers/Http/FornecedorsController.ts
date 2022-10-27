// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor"

export default class FornecedorsController {
    index(){
        return Fornecedor.query()
    }
    
    store({request}){
        const dados = request.only(['nome', 'cnpj', 'telefone', 'email', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])
        return Fornecedor.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  Fornecedor.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  Fornecedor.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const resume =  await  Fornecedor.findOrFail(id)

        const dados = request.only(['nome', 'cnpj', 'telefone', 'email', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        resume.merge(dados)
        return resume.save()
    }
}
