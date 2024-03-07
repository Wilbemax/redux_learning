import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const LS_KEY = "rfa"




const initialState = {
    favorites: JSON.parse(localStorage.getItem(LS_KEY) ?? "[]")
}

export const githubSlice = createSlice({
    name: 'github',
    initialState,
    reducers:{
        addFavorites: (state, action: PayloadAction<string>) =>{
            state.favorites.push(action.payload)
            localStorage.setItem(LS_KEY, JSON.stringify(state.favorites))
        },
        removeFavorites: (state, action: PayloadAction<string>) =>{
            state.favorites = state.favorites.filter((f:string) => f !== action.payload)
            localStorage.setItem(LS_KEY, JSON.stringify(state.favorites))
        }
    }
})
export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;