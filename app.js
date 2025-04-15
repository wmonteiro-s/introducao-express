import express from 'express'
const app = express()
const port = 3000

// Permitir ler JSON no corpo da requisição
app.use(express.json())

// Banco de dados da fake/shopee (em memória) 
const users = [
  {id: 1, nome: 'João', email: 'joão@email.com'},
  {id: 2, nome: 'Ana', email: 'ana@email.com'},
]

app.get('/', (req, res) => {
  res.send('<h1>VAI CORINTHIANS</h1>')
})

app.post('/createUser', (req, res) => {
  const {nome, sobrenome} = req.body
  res.send(`Nome completo: ${nome} ${sobrenome}`)
})

app.get('/users', (req, res) => {
  res.send(users)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})