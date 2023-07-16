import client from "../utils/clientConnect";


export const taskDatamapper = {

    getAllTasks: async () => {


        const query: string = `SELECT * FROM task`;

        try {
            const {rows} = await client.query(query);
            return rows;
        } catch (error) {
            console.log(error);
        }
    },


    createTask: async (task: any) => {

        const query = `INSERT INTO task (title, content, status, user_id, color) VALUES ($1, $2, $3, $4, $5)`;

        try {
            const {rows} = await client.query(query, [task.title, task.content, task.status, task.user_id, task.color]);
            return rows[0];
        } catch (error) {
            console.log(error);
        }
    },


    updateTask: async (id: number, data: any) => {

        const updates = Object.keys(data).map((key, i) => `"${key}" = $${i + 1}`);

        console.log('updates', updates)

        const query = `UPDATE task SET ${updates} WHERE id = ${id} RETURNING *`;

        try {
            const {rows} = await client.query(query, Object.values(data));
            return rows[0];
        } catch (error) {
            console.log(error);
        }
    },

    deleteTask: async (id: number) => {

        const query = `DELETE FROM task WHERE id = ${id}`;

        try {
            const {rows} = await client.query(query);
            return rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}