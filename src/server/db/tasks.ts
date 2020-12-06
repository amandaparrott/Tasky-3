

import { Query } from './index';


const getAllTasks = (mandatorytask: number) => Query(`
SELECT * FROM events WHERE events.mandatorytask = ?;`, [mandatorytask]);

const getspecTask = (eventid, mandatorytask) => Query("SELECT * FROM events WHERE events.id = ? AND events.mandatorytask = ?;", [eventid, mandatorytask]);

const deleteTask = (eventid) => Query(`DELETE FROM events WHERE events.id = ?;`, [eventid]);


export default {
    getAllTasks,
    getspecTask,
    deleteTask
}