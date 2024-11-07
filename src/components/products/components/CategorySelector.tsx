import * as React from "react";

import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const CategorySelector = () => {
  const [category, setCategory] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };
  return (
    <Box sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="label">Category</InputLabel>
        <Select
          labelId="label"
          id="demo-simple-select"
          value={category}
          label="Category"
          onChange={handleChange}
          classes={{}}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelector;
