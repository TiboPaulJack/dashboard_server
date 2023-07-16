import client from "../utils/clientConnect";


export const searchDatamapper = {

    search: async (search: string) => {


        const query = `SELECT 'user' as source, id as id, firstname, lastname FROM "user"
                       WHERE firstname ILIKE $1 || '%'
                          OR lastname ILIKE $1 || '%'
                       UNION
                       SELECT 'product' as source, id as id, name, NULL as lastname FROM "product"
                       WHERE name ILIKE $1 || '%'
        `;


        try {
            const result = await client.query(query, [search]);
            return result.rows;
        } catch (error) {
            console.log(error);
        }
    }
    
    
}