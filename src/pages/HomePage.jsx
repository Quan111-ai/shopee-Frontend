import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import ProductGrid from "../components/product/ProductGrid";

const HomePage = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        🏠 Trang chủ Shopee Clone
      </Typography>

      {/* Khuyến mãi hoặc banner */}
      <Box
        sx={{
          height: 180,
          borderRadius: 2,
          bgcolor: "#fceae8",
          mb: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 600,
          color: "#ee4d2d",
        }}
      >
        🔥 Banner khuyến mãi hoặc slider
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Grid sản phẩm */}
      <ProductGrid />
    </Box>
  );
};

export default HomePage;