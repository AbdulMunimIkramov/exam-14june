import axios from "axios"

export const getAllProduct = async () => {
    return axios('https://jsonplaceholder.typicode.com/photos')
}