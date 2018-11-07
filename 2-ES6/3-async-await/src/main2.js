/* promisses de forma manual */
const minhaPromisse = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve('ok'), 2000)
})

//Execução das promisses da forma antiga
minhaPromisse()
    .then(response => {
        console.log(response)
    })
    .catch(err => {
        console.log(err)
    })

//execução das promisses ES8
async function executaPromisse() {
    //await funciona como o .then()
    const response = await minhaPromisse();

    console.log(response)
}

//diferença entre o async await com a promisse antiga
async function execPromisse() {
    //execução de 3 promisses uma apos a outra...
    //a segunda linha só vai ser executada apos a finalização da linha anterior
    //essa a forma do ES8
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())

    //em contra partida a forma antiga pra fazer a mesma coisa ficaria dessa forma
    //cascateando a execução manual das promisses
    minhaPromisse().then(response => {
        console.log(response)

        minhaPromisse().then(response => {
            console.log(response) 

            minhaPromisse().then(response => {
                console.log(response)
            })
        })
    })
}

execPromisse()

//await só pode ser usado dentro de functions async
//functions async tb podem ser usadas com arrow functions

const execPromisseArrow = async () => {
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
    console.log(await minhaPromisse())
}

execPromisseArrow()