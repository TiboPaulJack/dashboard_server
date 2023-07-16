import {productDatamapper} from "../datamappers/productDatamapper";


interface Product {
    title: string,
    category: string,
    description: string,
    sellingPrice: number,
    costPrice: number,
    quantity: number,
    color: string,
    size: string,
    isDiscount: boolean,
    discountType: string | null,
    discountAmount: number | null,
    discountStartDate: string | null,
    discountEndDate: string | null,
    ispublished: boolean,
    publishedStartDate: string,
    publishedEndDate: string,
    images: string[],
}


export const productController = {


    getAllProducts: async (req: any, res: any) => {

        try {
            const products: Product[] = await productDatamapper.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }

    },

    createProduct: async (req: any, res: any) => {

        try {
            const product: Product = req.body;
            const newProduct: void = await productDatamapper.createProduct(product);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    },

    updateProduct: async (req: any, res: any) => {

            const id: number = req.params.id;
            const product: Product = req.body;

            try {
                const product: Product = req.body;
                const updatedProduct: void = await productDatamapper.updateProduct(id, product);
            } catch (error) {
                res.status(500).json(error);
                console.log(error);
            }
    },

    deleteProduct: async (req: any, res: any) => {

        const id: number = req.params.id;

        try {
            const deletedProduct: void = await productDatamapper.deleteProduct(id);
            res.status(200)
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }
}