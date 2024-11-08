import React from "react";
import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

interface TabContentProps {
  selectedTab: number;
  index: number;
}
const TabContent = (props: TabContentProps) => {
  //in this case the selected tab has 2 values possible( 0 and 1)
  // 0 --> all products and 1 --> favorite products
  const { selectedTab, index } = props;

  return (
    <div hidden={selectedTab !== index}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Box>
    </div>
  );
};

export default TabContent;
