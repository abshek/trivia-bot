const request = require("request")

const getTrivia = (number) => {

    return new Promise((resolve, reject) => {
        
        const uri = `http://numbersapi.com/${number}`
        request(uri, (err, resp, body) => {
            if (err) reject(err)
            resolve(resp.body)
        })

    })

}

module.exports = { getTrivia }