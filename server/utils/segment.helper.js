// const api = require('./api')
const Analytics = require('analytics-node'),
    analytics = new Analytics(process.env.SEGMENT_KEY),
    environment = process.env.ENVIRONMENT,
    crypto = require('crypto'),
    shasum = crypto.createHash('sha1');

module.exports = {
    pageCall: (url_parts) => {
        const pathname = url_parts.pathname
        if (pathname !== '/' && pathname !== '/about' && pathname !== '/rebuild')
            return

        const info = map[pathname],
            userId = crypto.createHash('md5').update(url_parts.ipaddress).digest('hex')
        
        analytics.page({
            userId: userId,
            category: info.category,
            name: info.name,
            properties: {
                url: 'http://jasonreidbryant.com',
                environment: environment,
                path: url_parts.pathname,
                title: info.title,
                referer: url_parts.referer,
                eventAction: 'Page View',
                eventCategory: info.category,
                eventLabel: info.title,
            }
        })
    }
}

const map = {
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

