import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {CardState} from "../../types";
import {getCards} from "./MainPageThunks";

interface Initial {
    cards: CardState[];
}

const initialState:Initial  = {
    cards: []
}

export const UserFormSlice = createSlice({
    name: 'Cards',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload;
        })
}});

export const MainPageReducer = UserFormSlice.reducer;
export const selectState = (state: RootState) => state.cards.cards;