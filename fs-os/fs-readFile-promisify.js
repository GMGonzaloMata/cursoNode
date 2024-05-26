const fs = require('node:fs')
const { promisify } = require('node:util')
// Esto se utiliza cuando no hay una version con promises.
const readFile = promisify(fs.readFile)

console.log(readFile)

console.log('leyendo el primer archivo')
fs.readFile('./archivo1.txt', 'utf-8')
  .then(text => {
    console.log('primer texto:', text)
  })

console.log('Hacer cosas mientras se lee el archivo')

fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text)
  })
