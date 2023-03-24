import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getMusicData } from './services/axiosServices';
export const getSearch = createAsyncThunk(
    "musics/getSearch",
    async (inputText: string) => {
        const response = await getMusicData(inputText);
        return response.data;
    });
const INITIAL_STATE = {
    searchData: {},
    status: "start"

}
const searchSlice = createSlice({
    name: "search",
    initialState: INITIAL_STATE,
    reducers: {
    }, extraReducers(builder) {
        builder.addCase(getSearch.pending, (state, action) => {
            state.status = "pending";

        }).addCase(getSearch.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.searchData = action.payload;

        }).addCase(getSearch.rejected, (state, action) => {
            state.status = "rejected";

        })
    }

});

export default searchSlice.reducer;