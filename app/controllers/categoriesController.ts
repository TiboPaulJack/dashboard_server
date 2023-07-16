import {categoriesDatamapper} from "../datamappers/categoriesDatamapper";


export const categoriesController = {


    getAllCategories: async (req: any, res: any) => {

        const categories = await categoriesDatamapper.getAllCategories();

        res.status(200).json(categories);
    }
}