import { configureStore } from "@reduxjs/toolkit";
import { backendApi } from "./backend/backend.api";

export const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer
    },
    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware().concat(backendApi.middleware)

    middleware: get => get().concat(backendApi.middleware)
    
})