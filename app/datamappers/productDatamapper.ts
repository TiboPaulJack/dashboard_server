import client from "../utils/clientConnect";


export const productDatamapper = {

    getAllProducts: async () => {

        const query: string = 'SELECT\n' +
            '    p.id,\n' +
            '    p.name,\n' +
            '    p.description,\n' +
            '    p.status,\n' +
            '    p."costPrice",\n' +
            '    p."sellPrice",\n' +
            '    p.quantity,\n' +
            '    c.name AS category,\n' +
            '    c.id AS category_id,\n' +
            '    s.name AS size,\n' +
            '    s.id AS size_id,\n' +
            '    co.id AS color_id,\n' +
            '    co.name AS color,\n' +
            '    p.created_at,\n' +
            '    p.updated_at\n' +
            'FROM\n' +
            '    product p\n' +
            '        LEFT JOIN\n' +
            '    product_category c ON p.product_category_id = c.id\n' +
            '        LEFT JOIN\n' +
            '    product_size s ON p.product_size_id = s.id\n' +
            '        LEFT JOIN\n' +
            '    product_color co ON p.product_color_id = co.id;';

        try {
            const {rows} = await client.query(query);
            return rows;
        } catch (error) {
            console.log(error);
        }
    },
    
    
    createProduct: async (product: any) => {

        const query = 'INSERT INTO product (name, description, status, "costPrice", "sellPrice", quantity, product_category_id, product_size_id, product_color_id)' +
            ' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)';
        
        try {
            const {rows} = await client.query(query, [product.name, product.description, product.status, product.costPrice, product.sellPrice, product.quantity, product.product_category_id, product.product_size_id, product.product_color_id]);
            return rows[0];
        } catch (error) {
            console.log(error);
        }
    },


    updateProduct: async (id: number, data: any) => {

        const updates = Object.keys(data).map((key, i) => `"${key}" = $${i + 1}`);

        console.log('updates', updates)

        const setClause = updates.join(', ');

        const params = [...Object.values(data), id];

        const query: string = `UPDATE product SET ${setClause} WHERE id = $${params.length}`;

        try {
            const {rows} = await client.query(query, params);
            return rows[0];
        } catch (error) {
            console.log(error);
        }
    },

    deleteProduct: async (id: number) => {

        const query: string = 'DELETE FROM product WHERE id = $1';

        try {
            const {rows} = await client.query(query, [id]);
            return rows[0];
        } catch (error) {
            console.log(error);
        }
    }
}