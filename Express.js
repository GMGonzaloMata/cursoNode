const express = require('express')
const app = express()

app.disable('x-powered-by')
const PORT = process.env.PORT ?? 3000

app.get('/pokemon/ditto', (req, res) => {
  res.status(200).send('<h1>Bienvenido a mi pagina</h1>')
})

// el middleware se pone entre la peticion y la respuesta

app.use((req, res, next) => { // se puede configurar para que acepte a todas las request o personalizar escribiendo de parametro las request para que solo afecte a las que se encuentre en el parametro.
// Tambien se puede configurar para que sea solo para un o unos metodos concretos.
  console.log('Mi primer middleware')
  // trackear la request a la base de datos
  // revisar si el usuario tiene cookies

  next()
})

app.post('/pokemon', (req, res) => {
  let body = ''

  // escuchar el evento data
  req.on('data', chunk => {
    body += chunk.toString()
  })

  req.on('end', () => {
    const data = JSON.parse(body)
    // llamar a una base de datos para guardar la info
    data.timestamp = Date.now()
    res.status(201).json(data)
  })
})

app.use((req, res) => { // use: para todas las opciones o metodos va a pasar por aca
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`server lsitening on port http://localhost:${PORT}`)
})
