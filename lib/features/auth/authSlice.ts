import { Auth } from "@/types/auth.type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: Auth | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null, // Correctly set to null initially
    loading: false,
    error: null,
};

// ✅ Rename to fetchUserAsync if it fetches user authentication data
export const fetchUserAsync = createAsyncThunk(
    "auth/fetchUser",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://your-api.com/auth/user");
            if (!response.ok) throw new Error("Failed to fetch user");
            const data: Auth = await response.json();
            return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state, action: PayloadAction<Auth>) => {
            state.user = action.payload;
            localStorage.setItem("user", JSON.stringify(action.payload)); // Persist in local storage
        },
        signOut: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserAsync.fulfilled, (state, action: PayloadAction<Auth>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUserAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
