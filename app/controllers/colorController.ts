import {colorDatamapper} from "../datamappers/colorDatamapper";


export const colorController : any = {


    async getAllColors(req: any, res: any) {

            try {
                const colors: string[] = await colorDatamapper.getAllColors();
                res.status(200).json(colors);
            } catch (error) {
                res.status(500).json(error);
                console.log(error);
            }
    }

}