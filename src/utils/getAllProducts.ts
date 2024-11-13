import { IProduct } from "../model";

export const getAllProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data: IProduct[] = (await response.json()) as IProduct[];
  return data;
};
