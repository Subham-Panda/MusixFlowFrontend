import { createSlice } from '@reduxjs/toolkit'
import Wallet from "../../utils/wallet";

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {},
    token: '',
  },
  reducers: {
    login: (state, action) => {
        console.log(action.payload)
        state.data = action.payload
        state.token = action.payload.token
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
