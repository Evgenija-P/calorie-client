import axios from "axios";
// import { toast } from "react-toastify";
import { createAsyncThunk } from "@reduxjs/toolkit";

// axios.defaults.baseURL = "https://calories-aqjy.onrender.com";
axios.defaults.baseURL = "http://localhost:8080/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

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

export const registracions = createAsyncThunk("auth/registracions", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("/auth/register", credentials);

    // setAuthHeader(response.data.token);
    // toast.success("Congratulations! You are registered!", options);

    return response.data;
  } catch (e) {
    // toast.error("Please, try one more");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logIn = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
  try {
    const response = await axios.post("/auth/login", credentials);
    setAuthHeader(response.data.token);
    return response.data;
  } catch (e) {
    // toast.error("Incorrect email or password. Please, try one more");
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;
  if (persistedToken === null) {
    return thunkAPI.rejectWithValue("Unable to fetch user");
  }

  try {
    setAuthHeader(persistedToken);
    const response = await axios.get("/auth/currentuser");
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});
