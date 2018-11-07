import axios from 'axios'
import { umPorSegundo, getUserFromGithub, Github, buscaUsuario } from './ex01'

class Api {
    static async getUserInfo(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`)
            console.log(response)
        } catch(err) {
            console.warn('Falha ao buscar o usuário')
        }
    }
}

Api.getUserInfo('sergiopeluzzi')

umPorSegundo()
getUserFromGithub('diego3g')
getUserFromGithub('diego3g124123')

Github.getRepositories('sergiopeluzzi/aula-git');
Github.getRepositories('rocketseat/dslkvmskv');

buscaUsuario('sergiopeluzzi')