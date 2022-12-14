import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class FornecedorValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nome: schema.string([
      rules.alpha({allow: ['space']}),
      rules.maxLength(100)
    ]),
    cnpj: schema.string([
      rules.minLength(18),
      rules.maxLength(18),
      rules.unique({ table: 'fornecedores', column: 'cnpj' })
    ]),
    telefone: schema.string([
      rules.mobile({
        locale: ['pt-BR']
      }),
      rules.maxLength(16)
    ]),
    email: schema.string.optional([
      rules.email(),
      rules.maxLength(100)
    ]),
    cep: schema.string([
      rules.minLength(9),
      rules.maxLength(9),
    ]),
    logradouro: schema.string.optional([
      rules.maxLength(100)
    ]),
    complemento: schema.string.optional([
      rules.maxLength(100)
    ]),
    numero: schema.number.optional([
      rules.range(1,100)
    ]),
    bairro: schema.string.optional([
      rules.maxLength(100)
    ]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {}
}
