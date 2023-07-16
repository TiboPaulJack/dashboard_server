import client from "../utils/clientConnect";
import {User} from "../controllers/userController";

export const userDatamapper : any = {

    async getAllUsers() {

        const query: string = 'SELECT * FROM "user"';
        try {
            const {rows} = await client.query(query);
            return rows
        }catch (error) {
            console.log(error);
        }
    },
    
    async getOneUser(id: number) {
        
        const query: string = 'SELECT * FROM "user" WHERE id = $1';

        try {
            const {rows} = await client.query(query, [id]);
            return rows[0];
        }catch (error) {
            console.log(error);
        }
    },
    
    async createUser(user: User) {
        
        const {firstname, lastname, password, email, phone, role, title, access} = user;
        
        const query: string = 'INSERT INTO "user" (firstname, lastname, password, email, phone, role, title, access, status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';

        try {
            const {rows} = await client.query(query, [user.firstname, user.lastname, user.password, user.email, user.phone, user.role, user.title, user.access, user.status]);
            return rows[0];
        }
        catch (error) {
            console.log(error);
        }
    },


    async updateUser(id :number, data: any) {

        const updates = Object.keys(data).map((key, i) => `${key} = $${i + 1}`);

        const setClause = updates.join(', ');

        const params = [...Object.values(data), id];
        
        const query: string = `UPDATE "user" SET ${setClause} WHERE id = $${params.length}`;
        
        try {
            const {rows} = await client.query(query, params);
            return rows[0];
        }
        catch (error) {
            console.log(error);
        }
    },

    async deleteUser(id: number) {

            const query: string = 'DELETE FROM "user" WHERE id = $1';

            try {
                const {rows} = await client.query(query, [id]);
                return rows[0];
            }
            catch (error) {
                console.log(error);
            }
    }


}


