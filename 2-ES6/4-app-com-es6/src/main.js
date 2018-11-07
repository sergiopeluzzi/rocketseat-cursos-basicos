import api from './api'

class App {
    constructor() {
        this.repositories = []

        this.formEl = document.querySelector('#repo-form')
        this.listEl = document.querySelector('#repo-list')
        this.inputEl = document.querySelector('input[name=repository]')

        this.registerHandlers()
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event)
    }

    render() {
        this.listEl.innerHTML = ''

        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            let titleText = document.createTextNode(repo.name)
            titleEl.appendChild(titleText)

            let descEl = document.createElement('p')
            let descText = document.createTextNode(repo.description)
            descEl.appendChild(descText)

            let linkEl = document.createElement('a')
            let linkText = document.createTextNode('Acessar')
            linkEl.appendChild(linkText)
            linkEl.setAttribute('href', repo.html_url)
            linkEl.setAttribute('target', '_blank')

            let listItemEl = document.createElement('li')
            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)

        })
    }

    setLoading(loading = true) {
        if(loading === true) {
            let loadingEl = document.createElement('span')
            loadingEl.appendChild(document.createTextNode('Carregando...'))
            loadingEl.setAttribute('id', 'loading')

            this.formEl.appendChild(loadingEl)
        } else {
            document.querySelector('#loading').remove()
        }
    }

    async addRepository(event) {
        event.preventDefault()

        const repoInput = this.inputEl.value

        if (repoInput.length === 0) {
            return
        }

        this.setLoading()

        try {
            const response = await api.get(`/repos/${repoInput}`)

            //desestruturação
            const { name, description, html_url, owner: { avatar_url } } = response.data

            //obj short syntax
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            })

            this.render()
        } catch(err) {
            alert('O Repositório não existe!')
        }

        this.inputEl.value = ''
        
        this.setLoading(false)
    }


}

new App()