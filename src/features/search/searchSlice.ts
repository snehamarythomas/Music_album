import { ActionTypes } from '@mui/base';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { RootState, AppThunk } from '../../app/store';
// import { fetchCount } from './counterAPI';

// export interface SearchState {
//   value: number;
//   status: 'idle' | 'loading' | 'failed';
// }

import axios from "axios";
import Data from "../../models/dataModel";
import { getMusicData } from './services/axiosServices';


export const getSearch = createAsyncThunk(
    "musics/getSearch",
    async (inputText:string) => {


        const response = await getMusicData(inputText);
        console.log(response.data)
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
        // searchIcon: (state) => {
        //     state.searchList
        // }
    }, extraReducers(builder) {
        builder.addCase(getSearch.pending, (state, action) => {
            state.status = "pending";

        }).addCase(getSearch.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state. searchData = action.payload;

        }).addCase(getSearch.rejected, (state, action) => {
            state.status = "rejected";

        })
    }

});

// export const { searchIcon } = searchSlice.actions;
export default searchSlice.reducer;