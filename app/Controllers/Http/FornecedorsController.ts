// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Fornecedor from "App/Models/Fornecedor"
import FornecedorValidator from "App/Validators/FornecedorValidator"

export default class FornecedorsController {
    index(){
        return Fornecedor.query().preload('produtos').paginate(1, 2)
    }
    
    async store({request}){
        const dados = await request.validate(FornecedorValidator)
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
        const fornecedor =  await  Fornecedor.findOrFail(id)

        const dados = request.only(['nome', 'cnpj', 'telefone', 'email', 'cep', 'logradouro', 'complemento', 'numero', 'bairro'])

        fornecedor.merge(dados)
        return fornecedor.save()
    }
}
