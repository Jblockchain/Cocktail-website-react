import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
//import ProductDetails from "../../Pages/ProductDetails";


export const fetchcoctails=createAsyncThunk("coctails/fetchcocktails", async ()=>{
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((res)=> res.json());
}
);

export const fetchsinglecoctails=createAsyncThunk("coctails/fetchsinglecocktails", async ({id})=>{
    return fetch(`https:/www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=> res.json());
}
);

export const fetchsearchcoctails=createAsyncThunk("coctails/fetchsearchcocktails", async ({searchtext})=>{
    return fetch(`www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchtext}`).then((res)=> res.json());
}
);

const CocktailSlice=createSlice({
    name:"cocktails",
    // reducer
    initialState:{
        loading:false,
        cocktails :[],
        error:null,
        cocktail:[]
    },
    extraReducers:{
        [fetchcoctails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchcoctails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails = action.payload.drinks
        },
        [fetchcoctails.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload
        },
        [fetchsinglecoctails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchsinglecoctails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktail = action.payload.drinks
        },
        [fetchsinglecoctails.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload
        },
        [fetchsearchcoctails.pending]:(state,action)=>{
            state.loading=true
        },
        [fetchsearchcoctails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails = action.payload.drinks
        },
        [fetchsearchcoctails.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload
        },
    }
})

export default CocktailSlice.reducer;