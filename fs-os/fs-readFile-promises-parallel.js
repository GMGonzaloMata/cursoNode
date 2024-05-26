const { readFile } = require('node:fs/promises')

Promise.all([
  readFile('./archivo1.txt', 'utf-8'),
  readFile('./archivo2.txt', 'utf-8')
]).then(([text, text2]) => {
  console.log('primer texto:', text)

  console.log('segundo texto:', text2)
})
console.log('Hacer cosas mientras se lee el archivo')
