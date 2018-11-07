/* CLASSES
class List {
    constructor() {
        this.data = []
    }

    add(data) {
        this.data.push(data)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor() {
        super()

        this.usuario = 'Sergio'
    }

    mostraUsuario() {
        console.log(this.usuario)
    }
}

const minhaLista = new TodoList()

document.getElementById('novotodo').onclick = function() {
    minhaLista.add('Novo Todo')
}

minhaLista.mostraUsuario()
*/
/*
class Matematica {
    static soma(a, b) {
        return a + b
    }
}

const soma = Matematica.soma(10, 6)
console.log(soma)
*/
/* CONST E LET
const user = { nome: 'Sergio' }

user.nome = 'Sergio Peluzzi'
user.idade = 32

function teste() {
    let user = { nome: 'Ronaldo' }
    console.log(user)
}

teste()
console.log(user)
*/
/* OPERAÇÕES COM ARRAYS 
// MAP - percorre todos os itens do array refenciando pelo item podendo add tb o index
const arr = [1,2,3,4,5,6,7,8,9]

const newArr = arr.map(function(item) {
    return item * 2
})

const newArr2 = newArr.map(function(item, index) {
    return item + index
})

console.log(arr)
console.log(newArr)
console.log(newArr2)

// REDUCE - percorre todo o array guardando o valor do next ao total, e retornando uma unica info
const sum = arr.reduce(function(total, next) {
    return total + next
})

console.log(sum)

// FILTER - percorre o array e retorna o item onde o retorno for true

const par = arr.filter(function(item) {
    return item % 2 === 0
})

console.log(par)

// FIND - percorre o array e procura por um valor, se encontrar retorna o valor, senão retorna undefined

const achou = arr.find(function(item) {
    return item == 7
})

console.log(achou)

*/
/** ARROW FUNCTIONS */
// Substituem com perfeição as funções anonimas, aquelas sem nome ;D
// QUando tem 1 paramentro suprime os parenteses, qndo tem 1 linha suprime o return e as chaves
/*
const arr = [1,2,3,4,5,6,7,8,9,10]
const newArr = arr.map(item => item * 2)

console.log(newArr)
*/
/** VALORES PADRÃO */
// São valores padrão para os parametros das funções, caso o parametro n seja passado, o valor padrao é atribuído
/*
function soma(a = 0, b = 0) {
    return a + b
}

const soma2 = (a = 1, b = 1) => a + b

console.log(soma(1))
console.log(soma2())
*/

/** DESESTRUTURAÇÃO */
// É uma forma rápida e fácil de atribuir o valor de objetos a variaveis. limpa o codigo
/*
const user = {
    nome: 'Sergio',
    idade: 32,
    endereco: {
        cidade: 'Cacoal',
        UF: 'RO'
    }
}

//forma antiga
const anome = user.nome
const aidade = user.idade
const acidade = user.endereco.cidade

console.log(anome)
console.log(aidade)
console.log(acidade)

//forma desestruturação
const { nome, idade, endereco: { cidade } } = user

console.log(nome)
console.log(idade)
console.log(cidade)

//forma antiga
function amostraNome(user) {
    console.log(user.nome)
}

//forma desestruturação
function mostraNome({ nome, idade }) {
    console.log(nome, idade)
}

amostraNome(user)
mostraNome(user)
*/

/** REST E SPREAD */
// REST utilizado com o destruct como no caso abaixo, atribui todo o resto de um objeto à variável setada com o operador rest
// no caso abaixo, o objeto user é desestruturado em duas variaveis: nome recebe o atributo nome e resto recebe o restante dos atributos
/*
const user = {
    nome: 'Sergio',
    idade: 32,
    empresa: 'Scalare'
}

const { nome, ...resto } = user

console.log(nome)
console.log(resto)

// pode ser usado em arrays tb
const arr = [1,2,3,4,5,6,7,8,9]
const [ a, b, c, ...d ] = arr

console.log(a)
console.log(b)
console.log(c)
console.log(d)

// e em funções tb com paassagem de parâmetros
function soma(a, b, c, d) {
    return a + b + c + d
}

console.log(soma(1,3))

function soma2(...soma) {
    return soma.reduce( (total, next) => total + next)
}

console.log(soma2(1,2,3,4,5,6,7))
*/
/** SPREAD */
// Faz uma opração distinta do REST, como por exemplo
// Juntar arrays
/*
const arr1 = [1,2,3,4,5,6,7,8,9]
const arr2 = [10,11,12,13,14,15,16,17,18,19]

const arr3 = [...arr1, ...arr2]

console.log(arr3)

// copiar dados do objeto
const user2 = {
    nome: 'Sergio',
    idade: 32,
    empresa: 'Scalare'
}

const user3 = {
    ...user2,
    nome: 'Lauriana'
}

console.log(user3)
*/
/** TEMPLATE LITERALS */
/*
const nome = 'Sergio'
const idade = 32
//fomar antiga
console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos')
//forma template
console.log(`Meu nome é ${nome} e tenho ${idade} anos`)
*/
/** OBJECT SHORT SYNTAX */
// É uma forma de abreviação na atribuição de atributos de objetos onde ja existem variaveis com o mesmo nome
/*
const nome = 'Sergio'
const idade = 32
//forma antiga
const user = {
    nome: nome,
    idade: idade,
    empresa: 'Scalare'
}

console.log(user)

//forma nova
const user2 = {
    nome, 
    idade,
    empresa: 'Scalare'
}

console.log(user2)
*/

/** EXERCÍCIO 01 */
/*
class Usuario {
    constructor(email, senha) {
        this.email = email
        this.senha = senha
    }

    isAdmin() {
        return this.admin
    }
}

class Admin extends Usuario {
    constructor() {
        super()
        this.admin = true
    }
}

const user1 = new Usuario('teste@teste.com', '123456')
const admin1 = new Admin('teste@teste.com', '123456')

console.log(user1.isAdmin())
console.log(admin1.isAdmin())
*/
/** EXERCÍCIO 02 */
/*
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//map
const idades = usuarios.map(item => item.idade)
console.log(idades)

//filter
const rs18 = usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade >= 18)
console.log(rs18)

//find
const google = usuarios.find(item => item.empresa === 'Google')
console.log(google)

//reduce com filter
const redfilt = usuarios.map(item => {
    item.idade *= 2
    return item
}).filter(item => item.idade <= 50)
console.log(redfilt)
*/
/** EXERCÍCIO 03 */
// Converter as funções em arrow functions
// 3.1
/*
const arr = [1, 2, 3, 4, 5];
arr.map( item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };
const mostraIdade = (usuario) => usuario.idade
console.log(mostraIdade(usuario));
// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
const mostraUsuario = (nome = 'Diego', idade = 18) => ({ nome, idade })
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));
// 3.4
const promise = () => new Promise((resolve, reject) => resolve())
console.log(JSON.parse(promise))
*/
/** EXERCÍCIO 04 */
/*
//4.1
const empresa = {
    nome: 'Scalare',
    endereco: {
        cidade: 'Cacoal',
        estado: 'RO'
    }
}

const { nome, endereco: { cidade, estado }} = empresa
console.log(nome)
console.log(cidade)
console.log(estado)
*/
/*
//4.2
function mostraInfo({nome, idade}) {
    return `${nome} tem ${idade} anos`
}

console.log(mostraInfo({ nome: 'Sergio', idade: 32 }))
*/
/** EXERCÍCIO 05 */
/*
//5.1
const arr = [1,2,3,4,5,6,7,8,9]
const [ arr2, ...arr3 ] = arr
console.log(arr2)
console.log(arr3)

const soma = (...numeros) => numeros.reduce((total, next) => total + next) 
console.log(soma(1,8,7,9,4,5,1,3,2,5,8,7,8,9))

//5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
        cidade: 'Rio do Sul',
        uf: 'SC',
        pais: 'Brasil',
    }
};
   
const usuario2 = {
    ...usuario,
    nome: 'Gabriel'
}

const usuario3 = {
    ...usuario,
    endereco: {
        ...usuario.endereco,
        cidade: 'Lontras'
    }

}

console.log(usuario2, usuario3)
*/

/** EXERCICIO 06 */
/*
const usuario = 'Diego';
const idade = 23;
console.log(`O usuário ${usuario} possui ${idade} anos`);
*/

/** EXERCICIO 07 */
/*
const nome2 = 'Diego';
const idade2 = 23;
const usuario2 = {
 nome2,
 idade2,
 cidade: 'Rio do Sul',
};

console.log(usuario2)
*/