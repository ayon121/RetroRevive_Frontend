import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getGamingProduct } from "./GamingProductAPIs"

const initialState = {
    allproducts : [], 
    isLoading : false,
    isError : false ,
    error : null 
}

export const  featchGamingProducts = createAsyncThunk('gamingproduct/getgamingproducts' , 
async () => {
    const GamingProducts = await getGamingProduct();
    return GamingProducts;
})

const GamingProductSlice = createSlice({
    name : 'GamingProducts',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(featchGamingProducts.pending , (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(featchGamingProducts.fulfilled , (state , action )=> {
            state.isLoading = false
            state.allproducts = action.payload
            console.log(action.payload);
        })
        builder.addCase(featchGamingProducts.rejected, (state , action )=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
        })
    }
})

export default GamingProductSlice.reducer