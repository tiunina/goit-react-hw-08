import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const authInstance = axios.create({
  baseURL: "https://connections-api.goit.global/",
  // headers: {
  //     "Authorization": "Bearer ${token}"
});

export const setToken = (token) => {
  authInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  authInstance.defaults.headers.common.Authorization = "";
};

export const apiRegisterUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      const { data } = await authInstance.post("/users/signup", formData);
      console.log("Response data registr:", data);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const apiLoginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkApi) => {
    try {
      const { data } = await authInstance.post("/users/login", formData);
      console.log("Response data login:", data);
      setToken(data.token);
      console.log("Form Data:", formData);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
