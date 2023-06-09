import { db } from '../db.js'


export const getUsers = (_, res) => {

    const query = "SELECT * FROM usuarios"

    db.query(query, (err, data) => {

        if (err) return res.json(err)

        return res.status(200).json(data)

    })
}

export const addUser = (req, res) => {
    const query = "INSERT INTO usuarios(`nome`, `email`, `telefone`, `data_nascimento`) VALUES (?)";
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento
    ]

    db.query(query, [values], (err) => {
        if (err) return res.json(err)
        return res.status(200).json("Usuário criado com sucesso")
    })
}

export const updateUser = (req, res) => {
    const query = 
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `telefone` = ?, `data_nascimento` = ? WHERE `id_usuarios`= ?";

    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.data_nascimento
    ]

    db.query(query, [...values, req.params.id_usuarios], (err) => {
        if (err) return res.json(err)
        return res.status(200).json("Usuário atualizado com sucesso")
    })
}

export const deleteUser = (req, res) => {
    
    const query = "DELETE FROM usuarios WHERE `id_usuarios` = ?";

    db.query(query, [req.params.id_usuarios], (err) => {
        
        if (err){console.error(err); return res.json(err)}
        return res.status(200).json("Usuário deletado com sucesso")
    })
}