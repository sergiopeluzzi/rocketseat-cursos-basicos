import axios from 'axios'

const apifacimed = axios.create({
    baseURL: 'http://200.10.185.242:8051'
})

export default apifacimed