import { configureStore } from "@reduxjs/toolkit";
import todoReducher from './features/todoSlice';

export const store = configureStore({
    reducer:{
        todos:todoReducher,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch