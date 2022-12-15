const connection = require('./connection')

// função genérica que retorna todos os valores

/*Funções que podem ser demoradas ou que precisam de um tempo de outro
tipo de software que tem seu próprio processamento acaba por precisar
dos parametros "ASYNC" e "AWAIT"*/

const getAll = async () => {
    const [tasks] = await connection.connection.execute('SELECT * FROM tasks')
    return tasks
}

const createTask = async (task) => {
    const {title} = task // pega somente o título da tarefa

    const dateUTC = new Date(Date.now()).toUTCString() //pegando o horário para passar ao banco de dados em milisegundos transformado em String da data

    const query = 'INSERT INTO tasks(title, stats, created_at) VALUES(?, ?, ?)'

    const createdTask = await connection.connection.execute(query, [title, 'pendente' , dateUTC])

    return createdTask
}

const deleteTask = async (id) => {
    const removedTask = await connection.connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask
}

const updateTask = async (id, task) => {
    const query = 'UPDATE tasks SET title = ?, stats = ? WHERE id = ?'

    const {title, status} = task

    const [updatedTask] = await connection.connection.execute(query, [title, status, id])
    return updatedTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}