//TRANSFORME EM ASYNC AWAIT
import axios from 'axios';
// Função delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));
/*
function umPorSegundo() {
    delay().then(() => {
        console.log('1s');
        delay().then(() => {
            console.log('2s');
            delay().then(() => {
                console.log('3s');
            });
        })
    });
}
umPorSegundo();
*/

export async function umPorSegundo() {
    await delay()
    console.log('1s')
    await delay()
    console.log('2s')
    await delay()
    console.log('3s')
}

/*

import axios from 'axios';
function getUserFromGithub(user) {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/

export async function getUserFromGithub(user) {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`)
        console.log(response)
    } catch(error) {
        console.log('Usuário não existe')
    }
    
}

/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}
Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
*/

export class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(response)
        } catch(err) {
            console.log('Repositorio não existe')
        }
    }
}

/*
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log('Usuário não existe');
        });
}
buscaUsuario('diego3g');

*/

export const buscaUsuario = async usuario => {
    try {
        const response = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(response.data)
    } catch(err) {
        console.log('User não existe')
    }
    
}