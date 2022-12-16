const connection = require('./connection')

// get Genérico
const getAll = async () => {
    // usando o [list], você pega somente o primeiro array de retorno.
    const [list] = await connection.connection.execute('SELECT * FROM myList')
    return list
}

// Post
const postList = async (lista) => {
    const {title} = lista
    const date = new Date(Date.now()).toUTCString()
    const query = 'INSERT INTO myList(title, status, created_at) VALUES(?, ?, ?)'
    const [list] = await connection.connection.execute(query, [title, 'pendente', date])
    return list
}

// Delete
const deleteList = async (id) => {
    const query = 'DELETE FROM myList WHERE id = ?'
    const deleted = await connection.connection.execute(query, [id])
    return deleted
}

// Put
const updateList = async (id, task) => {
    const {title, status} = task
    const query = 'UPDATE myList SET title = ?, status = ? WHERE id = ?'
    const [updated] = await connection.connection.execute(query, [title, status, id])
    return updated
}


module.exports = {
    getAll,
    postList,
    deleteList,
    updateList
}