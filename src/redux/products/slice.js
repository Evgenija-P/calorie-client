import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./operations";

const productsInitialState = {
  products: [],
  isLoading: false,
  error: null,
};

// const handleAddNewPetPendeing = (state) => {
//   state.isAdding = true;
// };

// const handleAddNewPetSuccess = (state, { payload }) => {
//   state.isAdding = false;
//   state.error = null;
//   state.pets.unshift(payload);
// };

// const handleAddNewPetRejected = (state, { payload }) => {
//   state.isAdding = false;
// };

const handlePending = (state) => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const productsSlice = createSlice({
  name: "products",
  initialState: productsInitialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.rejected, handleRejected)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      }),
});

export const productsReducer = productsSlice.reducer;
