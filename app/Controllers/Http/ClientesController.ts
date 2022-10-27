// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"

export default class ClientesController {
    index(){
        return Cliente.query()
    }
    
    store({request}){
        const dados = request.only(['nome', 'cpf', 'telefone', 'publicendereco'])
        return Cliente.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  Cliente.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  Cliente.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const resume =  await  Cliente.findOrFail(id)

        const dados = request.only(['nome', 'cpf', 'telefone', 'publicendereco'])

        resume.merge(dados)
        return resume.save()
    }
}
