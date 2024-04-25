import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"
import { addNewProductOrder } from "./AddProductOrderAPIs"


const initialState = {
    productorder : [], 
    isLoading : false,
    isError : false ,
    error : null 
}

export const  AddProductOrders = createAsyncThunk('gamingproduct/AddProductOrders' , 
async (neworder) => {
    addNewProductOrder(neworder)
})

const AddProductOrderSlice = createSlice({
    name : 'AddProductOrders',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(AddProductOrders.pending , (state) => {
            state.isError = false
            state.isLoading = true
        })
        builder.addCase(AddProductOrders.fulfilled , (state , action )=> {
            state.isLoading = false
            state.productorder.push(action.payload)
            toast("Order Placed Successfully")
        })
        builder.addCase(AddProductOrders.rejected, (state , action )=> {
            state.isLoading = false
            state.isError = true
            state.error = action.error?.message
            
        })
    }

})
export default  AddProductOrderSlice.reducer
