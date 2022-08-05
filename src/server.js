const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const db = require('./database')

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

db.sync()
   .then(() => console.log("Banco conectado com sucesso!"))

server.listen(3333, () => {
   console.log("Servidor rodando http://localhost:3333");
})