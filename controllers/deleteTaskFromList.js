const {
    pool
} = require('../config/postgres');

const deleteTaskFromList = (request, response) => {
    
    let taskID = parseInt(request.params.taskID.split(':')[1]);
    console.log('Task to be deleted', taskID);

    pool.query('DELETE FROM todolist WHERE id=$1', [taskID], (err, result) => {
        if(err) {
            console.log('Failed to acquire connection from pool', err);
            return;
        }

        console.log('Task deleted successfully!');

        response.status(200).json({
            status: true,
            message: 'Task Deleted!'
        });
    });
}

module.exports = {
    deleteTaskFromList
}