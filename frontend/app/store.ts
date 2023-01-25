import {configureStore} from "@reduxjs/toolkit";
import {MainPageReducer} from "../features/MainPage/MainPageSlice";

export const store = configureStore({
    reducer: {
        cards: MainPageReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;