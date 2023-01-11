import {Axios} from "axios";

class Strapi {

    constructor() {
        this.request = new Axios({
            baseURL: process.env.STRAPI_HOST + '/api',
            headers: {
                'Authorization': 'Bearer ' + process.env.STRAPI_TOKEN,
                'Content-Type': 'application/json'
            },
            transformResponse: (res) => JSON.parse(res),

        })
    }
    async getSimpleContent(contentType) {
        try {
            return await this.request.get(`/${contentType}?populate=deep`)
                .then((value) => value.data)
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async getContentById(contentType, id) {
        try {
            return await this.request.get(`/${contentType}/${id}?populate=deep`)
                .then((value) => value.data)
        }
        catch (e) {
            throw new Error(e)
        }
    }

    async createNewClient(name, email){
        try {
            const data = {
                data: {
                    NameAndSurname: name,
                    Email: email
                }
            }
            return await this.request.post(`/clients`, JSON.stringify(data))
                .then((value) => value.statusText)
        }
        catch (e) {
            throw new Error(e)
        }
    }

}


export const CmsApi = new Strapi()
