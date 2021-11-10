const axios = require('axios').default;
axios.defaults.baseURL = 'https://fakerestapi.azurewebsites.net/';
module.exports = {
    getObject(route) {

        return axios.get(route)

    },
    getObjectID(route, param) {
        return axios.get(route + "\\" + param)

    },
    postObject(route, data) {
        return axios.post(route, data)
    },
    putObject(route, data) {
        return axios.put(route, data)
    },
    deleteObject(route, param) {
        return axios.delete(route + "\\" + param)
    }

}

