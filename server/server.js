// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const express = require('express'),
  next = require('next'),
  http = require('http'),
  https = require('https'),
  dev = process.env.NODE_ENV !== 'production',
  app = next({ dev }),
  handle = app.getRequestHandler(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser')

app
  .prepare()
  .then(() => {
    const server = express()
    server.use('/assets', express.static('assets'))

    server.post('/locate', (req, res) => {
      console.log(req.body)
      // date time (UTC): city, country
    })

    // Serve All other Pages
    server.get('*', (req, res) => {
      // res.segKey = process.env.SegmentWriteKey
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