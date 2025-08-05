import axios from "../utils/axiosInstance";

const productService = {
  // Lấy tất cả sản phẩm
 getAll: async (params = {}) => {
  return await axios.get("/products", { params });
  // ví dụ: getAll({ limit: 20, page: 2 })
},

  // Lấy sản phẩm theo ID
  getById: (id) => axios.get(`/products/${id}`),


  // Tìm kiếm sản phẩm
 searchGlobal: async ({ keyword, page = 1, limit = 20 }) => {
  console.log("📡 Gọi tìm kiếm toàn hệ thống:", { keyword, page, limit });

  return await axios.get("/products/search", {
    params: { name: keyword, page, limit },
  });
},

  // Tạo mới sản phẩm (không có ảnh)
  create: async (data) => {
    return await axios.post("/products", data);
    // ví dụ: { name, description, price }
  },

  // Cập nhật sản phẩm (không có ảnh)
  update: async (id, data) => {
    return await axios.put(`/products/${id}`, data);
  },

  // Upload ảnh sản phẩm
  uploadImages: async (id, formData) => {
    return await axios.patch(`/products/${id}/upload-images`, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  },

  // Xoá sản phẩm
  delete: async (id) => {
    return await axios.delete(`/products/${id}`);
  },
};

export default productService;