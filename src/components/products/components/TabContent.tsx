import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";
import { IProduct } from "../../../model";

interface TabContentProps {
  selectedTab: number;
  index: number;
}
const TabContent = (props: TabContentProps) => {
  //in this case the selected tab has 2 values possible( 0 and 1)
  // 0 --> all products and 1 --> favorite products
  const { selectedTab, index } = props;
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    // network request side effects
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: IProduct[] = (await response.json()) as IProduct[];
        setProducts(data);
      } catch (error) {
        console.log("Error is --> ", error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div hidden={selectedTab !== index}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </div>
  );
};

export default TabContent;
