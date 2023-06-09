import axios from "axios";
// import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://calories-aqjy.onrender.com";
axios.defaults.baseURL = "http://localhost:8080/api";

// const options = {
//   position: "top-center",
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "dark",
// };

export const fetchProducts = createAsyncThunk("products/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/products");
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
