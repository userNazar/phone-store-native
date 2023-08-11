import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../interfaces";
import axios from "axios";



interface initialStateProps {
    list: Product[];
    loading: boolean;
    error: string | undefined;
    selectedItem: null | Product
}


const initialState: initialStateProps = {
    list: [],
    loading: false,
    error: undefined,
    selectedItem: null,
}



const productsList = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        getById: (state, action) => {
            const itemId = action.payload;
            const foundItem = state.list.find(item => item.id === itemId);

            if (foundItem) {
                state.selectedItem = foundItem;
            } else {
                state.selectedItem = null;
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchData.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.list = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.error = action.toString();
        })
    }
})

export const fetchData = createAsyncThunk(
    'fetchAllData',
    async () => {
        const response = await axios.get<Product[]>('https://pcshop-3cd02-default-rtdb.europe-west1.firebasedatabase.app/phones.json')
        return response.data
    }
)

export const { getById } = productsList.actions

export default productsList.reducer