import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import CartPage from "../pages/CartPage";
import OrderPlacedPage from "../pages/OrderPlacedPage";

import LoginPage from "../pages/LoginPage";
import OrderReviewPage from "../pages/OderReviewPage"; // ✅ Dùng đúng trang TSX
// import RegisterPage from "./pages/RegisterPage";
// import NotFoundPage from "./pages/NotFoundPage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order/placed" element={<OrderPlacedPage />} />

      <Route path="/login" element={<LoginPage />} />
      <Route path="/order/review" element={<OrderReviewPage />} /> {/* ✅ Thêm dòng này */}

      {/* <Route path="/register" element={<RegisterPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
};

export default AppRoutes;