import React, { Component } from 'react'
import api from '../../services/api'
import apifacimed from '../../services/apifacimed'
import { Link } from 'react-router-dom'

import './style.css'

export default class Main extends Component {
    // Variável de estado. Existem funções que trabalham com o estado já predefinidas
    // A função render fica escutando o state, e quando ha alguma alteração no state, o render
    // recarrega automaticamente
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }

    // Assim que o componente for mostrado em tela
    componentDidMount() {
        this.loadProducts()
    }

    // Arrow functions somente para as funções pessoais... as functions do react são usadas nos modelos acima
    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`)

        /* teste facimed com totvs ETB
        const respfacimed = await apifacimed.get('/wsDataServer/MEX?wsdl')
        const { facimed } = respfacimed.data
        console.log(facimed)
        */

        // Armazena o conteúdo da prop docs na var docs e todo o resto das propriedades em productInfo
        const { docs, ...productInfo } = response.data

        // products recebe o array docs e productInfo recebe productInfo mesmo e o page agora recebe o valor da pagina atual
        this.setState({ products: docs, productInfo, page })
    }

    prevPage = () => {
        // Pega os dados do estado
        const { page, productInfo } = this.state

        // verifica se a página atual que está no state é igual a 1. Se for, quer dizer que estamos na primeira página
        if (page === 1) return

        const pageNumber = page - 1

        this.loadProducts(pageNumber)
    }

    nextPage = () => {
        // Pega os dados do estado
        const { page, productInfo } = this.state

        // verifica se a página atual que está no state é igual ao numero total de paginas. Se sim, sai do metodo
        if (page === productInfo.pages) return

        const pageNumber = page + 1

        this.loadProducts(pageNumber)
    }

    render() {
        // Desestruturação pra diminuir o código
        const { products, page, productInfo } = this.state

        return (
            <div className="product-list">
                { products.map(product => ( 
                        <article key={ product._id }>
                            <strong>{ product.title }</strong>
                            <p>{ product.description }</p>
                            <Link to={`/products/${product._id}`}>Acessar</Link>                        
                        </article> 
                    )) }

                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
            </div>

            

        )
    }
}