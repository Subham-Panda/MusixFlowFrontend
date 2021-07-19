import { createSlice } from '@reduxjs/toolkit'

export const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        wallet_address: '',
        wallet_connected: '',
        provider: '',
    },
    reducers: {
        connected: (state, action) => {
            console.log({ action });
            state.wallet_address = action.payload.address
            state.provider = action.payload.provider
            state.wallet_connected = true
        },
        disconnect: (state) => {
            state.wallet_address = ''
            state.provider = ''
            state.wallet_connected = false
        }
    },
})


// Action creators are generated for each case reducer function
export const { connected, disconnect } = walletSlice.actions

export default walletSlice.reducer
