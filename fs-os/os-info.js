const os = require('node:os')

console.log('Informacion del sistema operativo')
console.log('-----------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Aquitectura del sistema operativo', os.arch())
console.log(os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log(os.uptime() / 60 / 60)
