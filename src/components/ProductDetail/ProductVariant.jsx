import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const ProductVariant = ({ variants = [], onSelect }) => {
  const [selected, setSelected] = useState(variants[0]?._id || "");

  const handleChange = (e) => {
    setSelected(e.target.value);
    onSelect?.(e.target.value);
  };

  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel id="variant-select-label">Chọn phiên bản</InputLabel>
      <Select
        labelId="variant-select-label"
        value={selected}
        label="Chọn phiên bản"
        onChange={handleChange}
      >
        {variants.map((v) => (
          <MenuItem key={v._id} value={v._id}>
            {v.name} – ₫{v.price.toLocaleString()}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ProductVariant;