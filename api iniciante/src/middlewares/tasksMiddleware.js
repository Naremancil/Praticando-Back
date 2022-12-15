const validarBody = (req, res, next) => {
    const {body} = req

    if(body.title === undefined){
        return res.status(400).json({message: 'O Campo Titulo é obrigatório'})
    }

    if(body.title === ''){
        return res.status(400).json({message: 'O Campo Titulo não pode ser vazio'})
    }

    if(body.status === undefined){
        return res.status(400).json({message: 'O Campo Status é obrigatório'})
    }

    if(body.status === ''){
        return res.status(400).json({message: 'O Campo Status não pode ser vazio'})
    }

    next()
    
}

module.exports = {
    validarBody
}