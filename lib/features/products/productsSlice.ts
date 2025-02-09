import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {getProducts} from "@/app/api/productsApi";
import { Product } from "@/types/product.types";

export type Color = {
  name: string;
  code: string;
};

export type Discount = {
  amount: number;
  percentage: number;
};
// Define a type for the slice state
interface ProductsState {
  colorSelection: Color;
  sizeSelection: string;
  productSelection: Product[];
  loading: boolean;
  error: string;
}

// Define the initial state using that type
export const initialState: ProductsState = {
  colorSelection: {
    name: "Brown",
    code: "bg-[#4F4631]",
  },
  sizeSelection: "Large",
  productSelection: [],
  loading: false,
  error: "",
};

export const fetchProductsAsync = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const data = await getProducts();
    return data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setColorSelection: (state, action: PayloadAction<Color>) => {
      state.colorSelection = action.payload;
    },
    setSizeSelection: (state, action: PayloadAction<string>) => {
      state.sizeSelection = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.productSelection = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const { setColorSelection, setSizeSelection } = productsSlice.actions;
// export const { setData, setLoading, setError } = productsSlice.actions;

export default productsSlice.reducer;
