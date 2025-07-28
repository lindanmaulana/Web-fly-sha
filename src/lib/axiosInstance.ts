import axios from "axios";

const APIBASEURL = process.env.API_BASE_URL

export const api = axios.create({
    baseURL: APIBASEURL,
})

export const setContentType = (data: unknown) => {
    if(data instanceof FormData) {
        delete api.defaults.headers["Content-Type"]
    } else {
        api.defaults.headers["Content-Type"] = "application/json"
    }
}

export const setToken = (token: string | null) => {
    if(token) {
        api.defaults.headers["Authorization"] = `Bearer ${token}`
    } else {
        delete api.defaults.headers["Authorization"]
    }
}