import React from "react";
import { Link } from "react-router-dom";
import * as Layout from "../../view/layout";
import { Box, Tab, Tabs } from "@mui/material";
import CategorySelector from "./components/CategorySelector";
import TabContent from "./components/TabContent";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Products = () => {
  const [value, setValue] = React.useState<number>(0);
  console.log("Value: " + value);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  //for better accessibility
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <Box>
      <Layout.NavBar />
      <Box sx={{ height: "100vh", marginTop: 9 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            margin: "auto",
            marginTop: "20px",
          }}
        >
          {/* product showcase */}
          <Box sx={{}}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="products-navigation"
            >
              <Tab label="All Products" {...a11yProps(0)} />
              <Tab
                label="Favorite"
                icon={<FavoriteIcon />}
                iconPosition="end"
                {...a11yProps(1)}
              />
            </Tabs>
          </Box>
          {/* right search filter and button */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <CategorySelector />
          </Box>
        </Box>
        <Box sx={{ width: "80%", margin: "auto" }}>
          {/* actual products (content) of the selected tab */}
          <TabContent selectedTab={value} index={0} />
          <TabContent selectedTab={value} index={1} />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
