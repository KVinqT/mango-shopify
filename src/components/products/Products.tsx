import { Link } from "react-router-dom";
import * as Layout from "../../view/layout";
import { Box } from "@mui/material";
import CategorySelector from "./components/CategorySelector";

const Products = () => {
  return (
    <Box>
      <Layout.NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            marginTop: "20px",
          }}
        >
          <CategorySelector />
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
