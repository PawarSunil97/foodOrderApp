import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../store/cardSlice";

const appStore = configureStore({
    reducer:{
        card: CartReducer
    }
});

export default appStore;