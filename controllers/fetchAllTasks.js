const { 
    pool
} = require('../config/postgres');

const fetchAllTasks = (request, response) => {
    console.log('Fetch all tasks');

    let toDoListTasks;

    pool.query('SELECT * FROM todolist', (err, result) => {

        if(err) {
            console.log('Failed to acquire connection from the pool', err);
            return;
        }

        toDoListTasks = result.rows;

        console.log('Successfully fetched records!');

        response.status(200).json({
            status: true,
            toDoListTasks,
            message: 'Records fetched successfully!'
        });

    });
}

module.exports = {
    fetchAllTasks
}