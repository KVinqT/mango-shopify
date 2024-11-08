import * as React from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import SelectRemoverButton from "./SelectRemoverButton";

const CategorySelector = () => {
  const [category, setCategory] = React.useState<string>("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <>
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth size="small">
          <InputLabel id="label">Category</InputLabel>
          <Select
            labelId="label"
            id="label"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            <MenuItem value={"Ten"}>Ten</MenuItem>
            <MenuItem value={"Twenty"}>Twenty</MenuItem>
            <MenuItem value={"Thirty"}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Box>
      {/* a button to remove the selected value of the product selector */}
      <SelectRemoverButton handleRemove={setCategory} value={category} />
    </>
  );
};

export default CategorySelector;
