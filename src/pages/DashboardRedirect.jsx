import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const role = params.get("role");

    if (token) {
      // Lưu token vào localStorage
      localStorage.setItem("token", token);
      console.log("✅ Token nhận được:", token);

      // Điều hướng theo role (nếu có)
      if (role === "admin") navigate("/admin");
      else if (role === "seller") navigate("/seller");
      else navigate("/");
    } else {
      console.warn("❌ Không có token trong URL");
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <p>🔄 Đang xử lý đăng nhập mạng xã hội...</p>
    </div>
  );
};

export default DashboardRedirect;