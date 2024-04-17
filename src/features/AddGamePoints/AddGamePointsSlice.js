import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { addGamingPoints } from "./AddGamingPointsAPIs";


const initialState = {
    points: [],
    isLoading: false,
    isError: false,
    error: null,
};
export const addGamingPointsAsync = createAsyncThunk(
    'gamingpoints/addGamingPoints',
    async (userEmail) => {
        addGamingPoints(userEmail);
    }
);



const AddGamePointsSlice = createSlice({
    name: "AddGamePoints",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(addGamingPointsAsync.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
                state.error = null;
            })
            .addCase(addGamingPointsAsync.fulfilled, (state, action) => {
                state.isLoading = false;
                state.points.push(action.payload);
            })
            .addCase(addGamingPointsAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
    }

})

export default AddGamePointsSlice.reducer