import express from 'express'

const router = express.Router()

const produtos = [
    {id: 1, nome: 'Mousse', preco: 3.5},
    {id: 2, nome: 'Manteiga', preco: 10}
]

router.get("/", (req, res)=>{
    res.status(200).json(produtos)
})

router.get("/produtos", (req, res)=>{
    res.send(produtos)
})

router.post("/produtos", (req, res)=>{
    const { nome, preco } = req.body
    
    const novoProduto = {
        id: produtos[produtos.length-1].id + 1,
        nome: nome,
        preco: preco
    }

    produtos.push(novoProduto)

    res.status(201).json(produtos)
})

router.put("/produtos/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoPreco } = req.body

    const indice = produtos.findIndex((produto)=>{
        return produto.id == id
    })

    if(indice === -1){
        return res.status(404).json({mensagem: "Produto não encontrado!"})
    }

    produtos[indice].nome = novoNome
    produtos[indice].preco = novoPreco

    res.send(produtos)
})

router.delete("/produtos/:id", (req, res)=>{
    const { id } = req.params

    const indice = produtos.findIndex((produto)=>{
        return produto.id == id
    })

    if(indice == -1){
        return res.status(404).json(produtos)
    }
    produtos.splice(indice, 1)
    res.send(produtos)
    
})

router.get("/produto/:id", (req, res)=>{
    const { id } = req.params

    const indice = produtos.findIndex((produto) => {
        return produto.id == id
    })

    res.status(200).json(produtos[indice])
})

export default router