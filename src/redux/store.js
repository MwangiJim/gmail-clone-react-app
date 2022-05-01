import { configureStore } from "@reduxjs/toolkit";
import { SliceReducer } from "./reducers/reducer";

let store = configureStore({
    reducer:{
        EmailReducer:SliceReducer.reducer
    }
})
export default store