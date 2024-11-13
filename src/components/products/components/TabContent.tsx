import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Box, Typography } from "@mui/material";
import { IProduct } from "../../../model";
import { getAllProducts } from "../../../utils";

interface TabContentProps {
  selectedTab: number;
}
const TabContent = (props: TabContentProps) => {
  const { selectedTab } = props;
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  console.log("TabContent render");

  useEffect(() => {
    console.log("Inside use effect");
    // network request side effects
    const fetchProducts = async () => {
      try {
        if (selectedTab === 0) {
          const data = await getAllProducts();
          const filteredCategories: string[] = [];
          //I know that insetad of nested filtering, we can make another simple request to the categories API
          for (let i = 0; i <= data.length - 1; i++) {
            if (!filteredCategories.includes(data[i].category)) {
              filteredCategories.push(data[i].category);
            }
          }
          setCategories(filteredCategories);
          setProducts(data);
        } else if (selectedTab === 1) {
          const data = await getAllProducts();
          setProducts(data);
        }
      } catch (error) {
        console.log("Error is --> ", error);
      }
    };
    fetchProducts();
  }, []);
  if (selectedTab === 1) {
    products.map((product) => {
      return <ProductCard key={product.id} {...product} />;
    });
  }
  return (
    <div>
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
