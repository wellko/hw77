import {createSlice} from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {CardState} from "../../types";

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
}});

export const MainPageReducer = UserFormSlice.reducer;
export const selectState = (state: RootState) => state.cards.cards;