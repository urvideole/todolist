const {
    pool
} = require('../config/postgres');
const updateTaskStatus = (request, response) => {
    let taskID = parseInt(request.params.taskID.split(':')[1]);

    console.log(taskID);

    pool.query("UPDATE todolist SET status='Pending' WHERE id=$1", [taskID], (err, result) => {
        if(err) {
            console.log('Failed to acquire connection from pool', err);
            return;
        }

        console.log('Successfully updated status of the task!');

        response.status(200).json({
            status: true,
            message: 'Successfully updated the task!'
        })
    })
}

module.exports = {
    updateTaskStatus
}