// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Compra from "App/Models/Compra"

export default class ComprasController {
    index(){
        return Compra.query()
    }
    
    store({request}){
        const dados = request.only(['valor_total', 'date'])
        return Compra.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return  Compra.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const categoria =  await  Compra.findOrFail(id)
        return categoria.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const resume =  await  Compra.findOrFail(id)

        const dados = request.only(['valor_total', 'date'])

        resume.merge(dados)
        return resume.save()
    }
}
