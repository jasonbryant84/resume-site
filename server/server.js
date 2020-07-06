require('dotenv').config()
let tempServer 

const express = require('express'),
  next = require('next'),
  url  = require('url'),
  https = require('https'),
  AWS = require('aws-sdk'),
  dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
  app = next({ dev }),
  handle = app.getRequestHandler(),
  port = process.env.PORT || 3000,
  environment = process.env.ENVIRONMENT,
  segmentHelper = require('./utils/segment.helper')

AWS.config.update({
  region: 'us-east-1',
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})
const s3 = new AWS.S3({
  apiVersion: '2012-10-17',
})

// GET FILE
const getAWSJSON = (path, file, res) => {
  const bucket = 'jason-bryant-resume',
    envSpecificFolder = environment != 'PRODUCTION' || 'production' ? 'dev-review-staging' : 'production',
    key = `${path}/${envSpecificFolder}/${file}`

  console.log(`Pulling from AWS bucket: ${bucket}/${key}`)

  s3
    .getObject({
      Bucket: bucket,
      Key: key
    })
    .on('success', response => {
      res.send(response.data.Body.toString('utf-8'))
    })
    .on('error', response => {
      res.send(response)
    })
    .send()
} //getAWSJSON

app
  .prepare()
  .then(() => {
    server = express()
    tempServer = server

    server.use('/assets', express.static('assets'))

    server.get('/locate', (req, res) => {
      console.log(req.body)
      // date time (UTC): city, country
    })

    server.get('/copy', (req, res) => {
      getAWSJSON('website/copy', 'text.json', res)
    })

    // Serve All other Pages
    server.get('*', (req, res) => {
      res.environment = environment

      const url_parts = url.parse(req.url)
        url_parts.ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        url_parts.referer = req.headers.referer,
        url_parts.user_agent = req.headers['user-agent']

      segmentHelper.pageCall(url_parts)

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
