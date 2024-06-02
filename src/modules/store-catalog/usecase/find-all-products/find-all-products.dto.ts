export interface FindAllproductDto {
    products: {
        id: string,
        name: string,
        description: string,
        salesPrice: number;
    }[];
}