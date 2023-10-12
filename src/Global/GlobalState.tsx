import { createSlice } from '@reduxjs/toolkit'

const initialState = {
user : "" || null
}

const GlobalState = createSlice({
  name: "GlobalState",
  initialState,
  reducers: {
    registerUser:(state:any, {payload}:any)=>{
        state.user = payload
    },
    logOut:(state:any)=>{
        state.user = null
    }
  }
});

export const { registerUser, logOut } = GlobalState.actions

export default GlobalState.reducer