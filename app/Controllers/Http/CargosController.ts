// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cargo from "App/Models/Cargo"
import CargoValidator from "App/Validators/CargoValidator"

export default class CargosController {
    index(){
        return Cargo.query().preload('funcionarios').paginate(1, 2)
    }
    
    async store({request}){
        const dados = await request.validate(CargoValidator)
        return Cargo.create(dados)
    }

    show({request}) {
        const id = request.param('id')
        return Cargo.findOrFail(id)
    }

    async destroy({request}){
        const id = request.param('id')
        const cargo =  await Cargo.findOrFail(id)
        return cargo.delete()
    }

    async update({request}) {
        const id = request.param('id')
        const cargo =  await Cargo.findOrFail(id)

        const dados = request.only(['nome'])

        cargo.merge(dados)
        return cargo.save()
    }

}
