// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Compra from "App/Models/Compra"
import CompraValidator from "App/Validators/CompraValidator"

export default class ComprasController {
    index(){
        return Compra.query().preload('produtos').paginate(1, 2)
    }
    
    async store({request}){
        const dados = await request.validate(CompraValidator)
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
        const compra =  await  Compra.findOrFail(id)

        const dados = request.only(['clienteId', 'funcionarioId', 'valorTotal', 'dataHora'])

        compra.merge(dados)
        return compra.save()
    }
}
