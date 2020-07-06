const fetch = require('node-fetch')

module.exports = {
    getLocation: async (ipaddress) => {
        try {
            const promise = await fetch(`http://ip-api.com/json/${ipaddress}`),
                json = await promise.json(), // for fetch result
                result = await Promise.resolve(json) // or all
            return result
        } catch (err) {
            return {
                status: 'error',
                msg: err
            }
        }

    }
}

// https://www.youtube.com/watch?v=vn3tm0quoqE