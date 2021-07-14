import { createSlice } from '@reduxjs/toolkit'
import Wallet from "../../utils/wallet";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {},
    token: '',
    isAdmin: false
  },
  reducers: {
    login: (state, action) => {
      // console.log({ data: action.data })
      state.data = action.payload
      state.token = action.payload.token
      state.isAdmin = action.payload.isAdmin
    },
    logout: () => {
      Wallet.disconnect(true);
      localStorage.removeItem("persist:root");
      window.location.href = "/login";
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
