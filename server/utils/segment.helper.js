// const api = require('./api')
const Analytics = require('analytics-node'),
    analytics = new Analytics(process.env.SEGMENT_KEY),
    environment = process.env.ENVIRONMENT,
    crypto = require('crypto'),
    geo = require('./geo')

module.exports = {
    pageCall: async (url_parts) => {       
        const noGeoResult = {
            city: 'unknown',
            country: 'unknown'
        }

        try {
            // let geoPromiseObject = await geo.getLocation(url_parts.ipaddress)
            const promise = await geo.getLocation(url_parts.ipaddress),
                geoResult = await Promise.resolve(promise), //all
                result = geoResult.status === 'success' ? geoResult : noGeoResult
                console.log('result', result)
                
                pageCall(url_parts, result)
        } catch(e) {
            console.log('geoInfo Error!', e)
            pageCall(url_parts, noGeoResult)
        }
    }
}
const pageCall = (url_parts, geoResult) => {
    const info = map[url_parts.pathname],
        userId = crypto.createHash('md5').update(url_parts.ipaddress).digest('hex')

    analytics.page({
        userId: userId,
        category: info.category,
        name: info.name,
        properties: {
            url: 'http://jasonreidbryant.com',
            ipaddress: url_parts.ipaddress,
            city: geoResult.city,
            country: geoResult.country,
            environment: environment,
            path: url_parts.pathname,
            title: info.title,
            referer: url_parts.referer,
            eventAction: 'Page View',
            eventCategory: info.category,
            eventLabel: info.title,
        },
        context: {
            ip: url_parts.ipaddress,
            userAgent: url_parts.user_agent
            },
    })
},
map = {
    '/': {
        title: 'Home',
        name: 'Home',
        category: 'Resume'
    },
    '/about': {
        title: 'About',
        name: 'About',
        category: 'Resume'
    },
    '/rebuild': {
        title: 'Helping Others Rebuild in the Algarve',
        name: 'Rebuild',
        category: 'Volunteering'
    }
}

