import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

import {
  getProducts,
  getProductById,
} from "../../services/productService";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    return await getProducts();
  }
);

export const fetchProductById = createAsyncThunk(
  "products/fetchProductById",
  async (id) => {
    return await getProductById(id);
  }
);

const initialState = {
  items: [],
  selectedProduct: null,
  loading: false,
  productLoading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "Failed to fetch products";
      })
      .addCase(fetchProductById.pending, (state) => {
        state.productLoading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.productLoading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.productLoading = false;
        state.error =
          action.error.message ||
          "Failed to fetch product";
      });
  },
});

export default productSlice.reducer;