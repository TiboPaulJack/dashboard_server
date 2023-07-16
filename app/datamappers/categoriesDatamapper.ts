import client from "../utils/clientConnect";


export const categoriesDatamapper = {

    getAllCategories: async () => {

        const query: string = 'SELECT * FROM product_category;';

        try {
            const {rows} = await client.query(query);
            return rows;
        }
        catch (error) {
            console.log(error);
        }
    }
}