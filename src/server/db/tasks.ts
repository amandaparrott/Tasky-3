

import { Query } from './index';


const getAllTasks = (mandatory: number) => Query(`
SELECT * FROM events WHERE mandatory = ?;` [mandatory]);

const deleteTask= (id: number) => Query(`
DELETE FROM events
WHERE id = ?`, [id]);


export default {
    getAllTasks,
    deleteTask
}