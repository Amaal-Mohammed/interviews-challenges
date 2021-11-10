const axios = require('axios').default;
const HelperMethods = require('./HelperMethods.js')
describe("testing get Authors", () => {

    it("Get All author should give 200", () => {
        return HelperMethods.getObject('api/v1/Authors').then(res => expect(res.status).toBe(200))
    })

    it("Get certain  author with a valid ID", () => {

        return HelperMethods.getObjectID('api/v1/Authors', 1).then(res => expect(res.status).toBe(200) && expect(res.data[0]).toBe(1))

    })
    it("Get certain  author with a Invalid ID type", async () => {

        return await HelperMethods.getObjectID('api/v1/Authors', 0.2).catch((error) => {
            expect(error.response.status).toBe(400)
        })
    })

    it("Get certain  author with a non existing ID", async () => {
        return await HelperMethods.getObjectID('api/v1/Authors', -1).catch((error) => {
            expect(error.response.status).toBe(404)
        })
    })


    it("Get book of a certain Author", async () => {
        return await HelperMethods.getObjectID('/api/v1/Authors/authors/books', 1).then(res => expect(res.status).toBe(200))

    })
    it("Add an Author", async () => {
        return await HelperMethods.postObject('/api/v1/Authors', {
            "id": 0,
            "idBook": 0,
            "firstName": "amaal",
            "lastName": "adel"
        }).then(res => expect(res.status).toBe(200))


    })

    it("Update an Author", async () => {
        return await HelperMethods.putObject('/api/v1/Authors/0', {
            "idBook": 0,
            "firstName": "amaal",
            "lastName": "string"
        }).then(res => expect(res.status).toBe(200) && expect(res.data[2]).toBe("amaal"))



    })

    it("Delete Author", async () => {

        return await HelperMethods.deleteObject('/api/v1/Authors', 1).then(res => expect(res.status).toBe(200))

    })

})