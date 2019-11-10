import * as restify from 'restify'

const server = restify.createServer({
  name: 'meat-api',
  version: '1.0.0'
})

server.use(restify.plugins.queryParser())

server.get('/info', [
  (req, resp, next) => {
    if (req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
      // resp.status(400)
      // resp.json({ message: 'Please, update your browser' })

      let error: any = new Error()
      error.statusCode = 400
      error.message = 'Please, update your browser'
      return next(error)
    }
    return next()
  },
  (req, resp, next) => {
    // resp.contentType = 'application/json'
    // resp.setHeader('Content-Type', 'application/json')

    resp.json({
      browser: req.userAgent(),  // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.87 Safari/537.36"
      method: req.method,
      url: req.href(),
      path: req.path(),
      query: req.query
    })
    return next()
  }
])

server.listen(3000, () => {
  console.log('API is running on http://localhost:3000')
})