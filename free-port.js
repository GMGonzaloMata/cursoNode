const net = require('node:net') // con net se pueden hacer conexiones con el protocolo TCP.

function findAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.listen(desiredPort, () => {
      const { port } = server.address()
      server.close(() => {
        console.log(`Puerto ${port} disponible`)
        resolve(port)
      })
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Puerto ${desiredPort} ocupado, buscando otro...`)
        findAvailablePort(desiredPort + 1).then(port => resolve(port))
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { findAvailablePort }
