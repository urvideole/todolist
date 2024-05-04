const express = require('express');
const router = express.Router();

// imports
const {
    fetchAllTasks
} = require('../controllers/fetchAllTasks');
const {
    addTaskToList
} = require('../controllers/addTaskToList');
const {
    updateTaskStatus
} = require('../controllers/updateTaskStatus');
const {
    deleteTaskFromList
} = require('../controllers/deleteTaskFromList');


//endpoints
router.get('/fetchAllTasks', 
    fetchAllTasks
);

router.post('/addTaskToList',
    addTaskToList
);

router.patch('/updateTaskStatus/:taskID',
    updateTaskStatus
);

router.delete('/deleteTask/:taskID', 
    deleteTaskFromList
);

module.exports = router;