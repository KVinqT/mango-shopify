import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import { IProduct } from "../../../model";

interface TabContentProps {
  selectedTab: number;
  index: number;
}
const TabContent = (props: TabContentProps) => {
  const { selectedTab, index } = props;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  useEffect(() => {
    console.log("Inside use effect");
    // network request side effects
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data: IProduct[] = (await response.json()) as IProduct[];
        const filteredCategories: string[] = [];
        for (let i = 0; i <= data.length - 1; i++) {
          console.log("Enter for loop");
          if (!filteredCategories.includes(data[i].category)) {
            filteredCategories.push(data[i].category);
          }
        }
        setCategories(filteredCategories);
        setProducts(data);
      } catch (error) {
        console.log("Error is --> ", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div hidden={selectedTab !== index}>
      {categories.map((c) => {
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
            key={c}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "medium",
              }}
            >
              {c.toUpperCase()}
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "80%",
                margin: "auto",
                marginTop: 9,
                flexWrap: "wrap",
                gap: 2,
              }}
            >
              {products
                .filter((product) => {
                  return product.category.trim() === c.trim();
                })
                .map((product) => {
                  return <ProductCard key={product.id} {...product} />;
                })}
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default TabContent;
