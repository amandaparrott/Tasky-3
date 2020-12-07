

import { Query } from './index';


const getAllTasks = (mandatory: number) => Query(`
SELECT * FROM events WHERE mandatory = ?;` [mandatory]);

const getOneTask= (id: number) => Query(`
SELECT FROM events
WHERE id = ?`, [id]);

const deleteTask= (id: number) => Query(`
DELETE FROM events
WHERE id = ?`, [id]);


export default {
    getAllTasks,
    deleteTask,
    getOneTask
}