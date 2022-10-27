// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Funcionario from "App/Models/Funcionario"

export default class FuncionariosController {
    index(){
        return Funcionario.query()
    }
    
    store({request}){
        const dados = request.only(['nome', 'matricula', 'email', 'telefone'])
        return Funcionario.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  Funcionario.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  Funcionario.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const resume =  await Funcionario.findOrFail(id)

        const dados = request.only(['nome', 'matricula', 'email', 'telefone'])

        resume.merge(dados)
        return resume.save()
    }
}
