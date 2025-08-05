import React from "react";
import { Button } from "@mui/material";

const AddToCartButton = ({ onAdd, disabled }) => (
  <Button
    variant="contained"
    size="large"
    color="error"
    disabled={disabled}
    sx={{ px: 4, py: 1.5, fontSize: 16 }}
    onClick={onAdd}
  >
    Thêm vào giỏ hàng
  </Button>
);

export default AddToCartButton;