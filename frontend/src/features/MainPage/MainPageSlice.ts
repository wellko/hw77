import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {CardState} from "../../types";
import {getCards, newCard} from "./MainPageThunks";

interface Initial {
    cards: CardState[];
    posting: boolean;
    getting: boolean;
}

const initialState:Initial  = {
    cards: [],
    posting: false,
    getting: false,
}

export const UserFormSlice = createSlice({
    name: 'Cards',
    initialState,
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(getCards.pending, (state) => {
            state.getting = true;
        })
        builder.addCase(getCards.fulfilled, (state, action) => {
            state.cards = action.payload;
            state.getting = false;
        })
        builder.addCase(getCards.rejected, (state) => {
            state.getting = false;
        })
        builder.addCase(newCard.pending, (state) => {
            state.posting = true;
        })
        builder.addCase(newCard.fulfilled, (state) => {
            state.posting = false;
        })
        builder.addCase(newCard.rejected, (state) => {
            state.posting = false;
        })
}});

export const MainPageReducer = UserFormSlice.reducer;
export const selectState = (state: RootState) => state.cards.cards;
export const selectGetting = (state: RootState) => state.cards.getting;
export const selectPosting = (state: RootState) => state.cards.posting;