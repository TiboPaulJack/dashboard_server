import {searchDatamapper} from "../datamappers/searchDatamapper";


export const searchController = {



    search: async (req: any, res: any) => {

        const search: string = req.params.search;
        const searchResult: any = await searchDatamapper.search(search);

        res.status(200).json(searchResult);
    }
}