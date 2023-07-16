import client from "../utils/clientConnect";


export const colorDatamapper = {

    getAllColors: async () => {

        const query : string = 'SELECT * FROM "product_color";';

        try {
            const {rows} = await client.query(query);
            return rows;
        }
        catch (error) {
            console.log(error);
        }
    }


}