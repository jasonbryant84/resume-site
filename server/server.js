require('dotenv').config()
let tempServer 

const express = require('express'),
  next = require('next'),
  url  = require('url'),
  https = require('https'),
  dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
  app = next({ dev }),
  handle = app.getRequestHandler(),
  port = process.env.PORT || 3000,
  environment = process.env.ENVIRONMENT,
  segmentHelper = require('./utils/segment.helper')
  awsHelper = require('./utils/aws.helper')

app
  .prepare()
  .then(() => {
    server = express()
    tempServer = server

    server.use('/assets', express.static('assets'))

    server.get('/copy', (req, res) => {
      awsHelper.getAWSJSON('website/copy', 'text.json', res)
    })

    // Serve All other Pages
    server.get('*', (req, res) => {
      res.environment = environment

      const allowList = (pathname) => {
          const list = ['/', '/about', '/rebuild']
          return list.includes(pathname)
        },
        url_parts = url.parse(req.url)

      if(allowList(url_parts.pathname)) {
        url_parts.ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        url_parts.referer = req.headers.referer,
        url_parts.user_agent = req.headers['user-agent']
        
        segmentHelper.pageCall(url_parts)
      }
        
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:' + port)
      if (process.env.NODE_ENV === 'development') {
        https.createServer(sslOptions, server).listen(5001)
        console.log('...and via https on port 5001')
      }
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })

module.exports = { app }
