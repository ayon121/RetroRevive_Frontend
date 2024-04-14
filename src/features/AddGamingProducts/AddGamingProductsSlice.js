import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addNewGamingProduct } from "./AddGamingProductsAPIs"
import { toast } from "react-toastify"


const initialState = {
    allgamingproducts : [], 
    isLoading : false,
    isError : false ,
    error : null 
}

export const  AddGamingProducts = createAsyncThunk('gamingproduct/addgamingproducts' , 
async (newproduct) => {
    addNewGamingProduct(newproduct)
})

const AddGamingProductSlice = createSlice({
    name : 'AddGamingProducts',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(AddGamingProducts.pending , (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(AddGamingProducts.fulfilled , (state , action )=> {
            state.isLoading = false
            state.allgamingproducts.push(action.payload)
            toast("Game added Successfully")
        })
        builder.addCase(AddGamingProducts.rejected, (state , action )=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            
        })
    }

})
export default  AddGamingProductSlice.reducer
