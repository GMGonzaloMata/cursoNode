const fs = require('node:fs')

console.log('leyendo el primer archivo')
// tercer parametro un callback para saber en que momento se termian de leer el archivo, los callbacks se ejecutan cuando una tarea ha terminado.
fs.readFile('./archivo1.txt', 'utf-8', (err, text) => {
  console.log('primer texto:', text)
  console.log(err)
})

console.log('Hacer cosas mientras se lee el archivo')

console.log('Leyendo el segundo archivo:')
// tercer parametro un callback para saber en que momento se termian de leer el archivo, los callbacks se ejecutan cuando una tarea ha terminado.
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
  console.log(err)
})
