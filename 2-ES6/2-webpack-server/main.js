//export nomeado
import { soma, subtracao as sub } from './functions'
//export default
import multiplicacaoDflt from './multiplicacao'
//export misto
import div, { resto } from './misto'
//export multiplos
import * as funcs from './varios'

console.log(soma(7,2))
console.log(sub(7,2))
console.log(multiplicacaoDflt(7,2))
console.log(div(7,2))
console.log(resto(9))
console.log(funcs.teste1('Hello World'))
