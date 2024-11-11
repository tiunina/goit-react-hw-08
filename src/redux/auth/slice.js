import { createSlice } from "@reduxjs/toolkit";
import { apiLoginUser, apiRegisterUser } from "./operations";
const INITIAL_STATE = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder //regestration
      .addCase(apiRegisterUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiRegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        // state.user = action.payload.user;
      })
      .addCase(apiRegisterUser.rejected, (state) => {
        state.isLoading = false;
      }) //login
      .addCase(apiLoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(apiLoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.token = action.payload.token;
        state.user.name = action.payload.user.name;
        // state.user = action.payload.user;
      })
      .addCase(apiLoginUser.rejected, (state) => {
        state.isLoading = false;
      }),
});
export const authReducer = authSlice.reducer;
