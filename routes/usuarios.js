import express from 'express'

const router = express.Router()

// Banco de dados Fake (em memória)
const usuarios = [
    {id: 1, nome: 'João', email:"joao@email.com"},
    {id: 2, nome: 'Ana', email:"ana@email.com"}
]

//Rota cria usuário
router.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body;

    const novoUsuario = {
        id: usuarios[usuarios.length-1].id + 1,
        nome: nome,
        email: email
    }

    usuarios.push(novoUsuario)

    res.send(usuarios)
})

router.put("/usuario/:id", (req, res)=>{
    const { id } = req.params
    const {novoNome, novoEmail} = req.body

    const indice = usuarios.findIndex((usuario)=>{
        return usuario.id == id
    })

    if(indice === -1){
      return res.status(404).json({mensagem: "Usuário não encontrado!"})
    }

    usuarios[indice].nome = novoNome
    usuarios[indice].email = novoEmail

    res.send(usuarios)

})

/** 
 * Crie uma rota(endpoint) do tipo GET com URI: /usuarios 
 * que envie uma resposta (mensagem) com todos os 
 * usuários cadastrados no "banco de dados fake".
*/
router.get("/usuarios", (req, res) => {

    res.send(usuarios)

})


/**
 * Faça uma rota para deletar um usuário de acordo com o id
 * recebido por parâmetro
 *  Método: DELETE
 *  Endpoint: /usuario/:id
 * 
 *  Resposta: a lista de usuários atualizada
 * 
 * dica: use o splice() para remover o usuário da lista
 */

router.delete("/usuarios/:id", (req, res)=>{
    //const id = req.params.id
    const { id } = req.params

    const index = usuarios.findIndex((usuario)=>{
        return usuario.id == parseInt(id)
    })

    if (index === -1) {
        return res.status(404).json({mensagem: "Usuário não encontrado!"})
    }
    produtos.splice(index, 1)
    res.send(produtos)

})

export default router