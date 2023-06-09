import { createSlice } from "@reduxjs/toolkit";
import { registracions } from "./operations";

const authInitialState = {
  name: "",
  email: "",
  login: "",
  token: "",
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

const authSlice = createSlice({
  name: "products",
  initialState: authInitialState,

  extraReducers: (builder) =>
    builder
      .addCase(registracions.pending, handlePending)
      .addCase(registracions.rejected, handleRejected)
      .addCase(registracions.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.error = null;
        state.name = action.payload.name;
        state.email = action.payload.email;
      }),
});

export const authReducer = authSlice.reducer;
