import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";



interface ProductsWishListProps {
    listWish: Product[],
    historyList: string[]
}

const initialState: ProductsWishListProps = {
    listWish: [],
    historyList: [],
}

const productsWishList = createSlice({
    name: 'wishList',
    initialState,
    reducers: {
        addToList: (state, action) => {
            state.listWish = [...state.listWish, action.payload]
        },
        removeFromList: (state, action) => {
            state.listWish = state.listWish.filter(el => el.id !== action.payload)
        },
        addToHistory: (state, action) => {
            if (!state.historyList.includes(action.payload)) {
                state.historyList = [...state.historyList, action.payload]
            }

        },
        removeFromHistory: (state, action) => {
            state.historyList = state.historyList.filter(el => el !== action.payload)
        },
        removeAllFromHistory: (state) => {
            state.historyList = []
        }
    }
})


export const { addToList, removeFromList, addToHistory, removeFromHistory, removeAllFromHistory } = productsWishList.actions
export default productsWishList.reducer;