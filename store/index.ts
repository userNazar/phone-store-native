import { configureStore } from "@reduxjs/toolkit";
import productsList from "./slicers/productsList";
import productsWishList from "./slicers/productsWishList";


export const store = configureStore({
    reducer: {
        products: productsList,
        productsWish: productsWishList,
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch