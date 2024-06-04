const http = require('node:http')
const fs = require('node:fs')
const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('Bienvenido a la página de inicio')
  } else if (req.url === '/messi') {
    fs.readFile('./messi.jpg', (err, data) => {
      if (err) {
        res.statusCode = 500
        res.end('500 Internal Error Server')
      } else {
        res.setHeader('Content-Type', 'image/jpg')
        res.statusCode = 200
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('404')
  }
}
const server = http.createServer(processRequest)
server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
