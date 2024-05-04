const { 
    pool
} = require('../config/postgres');

const addTaskToList = (request, response) => {
    console.log('Add Task to the List');

    let task = request.body.task;
    let status = 'Pending';

    pool.query('INSERT INTO todolist (task, status) VALUES ($1, $2)', [task, status], (err, result) => {
        if(err) {
            console.log('Error while executing query', err);
            return;
        }

        console.log('Successfully inserted record in DB');

        response.status(200).json({
            status: true,
            message: 'Task Added!'
        });
    });
}

module.exports = {
    addTaskToList
}