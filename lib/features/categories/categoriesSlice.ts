import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getCategories } from '@/app/api/categoriesApi';
import { Category } from "@/types/category.types";


// Define a type for the slice state
// interface CategoriesState {
//   categorySelection: Category[];
//   loading: boolean;
//   error: string;
// }

// Define the initial state using that type
// export const initialState: CategoriesState = {
//   categorySelection: [],
//   loading: false,
//   error: "",
// };

// Async Thunk to Fetch Categories
export const fetchCategoriesAsync = createAsyncThunk(
  'categories/fetchCategories',
  async () => {
    const data = await getCategories();
    return data;
  }
);

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [] as Category[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action: PayloadAction<Category[]>) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});



export default categoriesSlice.reducer;