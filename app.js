import express from 'express'
import usuariosRoutes from './routes/usuarios.js'
import fornecedoresRoutes from './routes/fornecedores.js'
import produtosRoutes from './routes/produtos.js'

const app = express()

// Permitir ler JSON no corpo da requisição
app.use(express.json())

// Adiciona o roteador de usuários
app.use("/usuarios", usuariosRoutes)

// Adiciona o roteador de fornecedores
app.use("/fornecedores", fornecedoresRoutes)

// Adiciona o roteador de produtos
app.use("/produtos", produtosRoutes)

const port = 3000

app.get("/", (req, res)=>{
  res.send("Oi")
})

app.listen(port, ()=>{
    console.log(`App escutando na  porta ${port}`)
})