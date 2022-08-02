import axios from "axios";


export const api = axios.create({
    baseURL: 'http://192.168.0.107:3333/api'
})

/**
 * O React native por padrão, só aceita protocolos https em api. Porém para reverter isso, é necessários
 * Usar o IPV4 para comunicação entre sistemas.
 */