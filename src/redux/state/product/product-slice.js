import {createSlice} from "@reduxjs/toolkit";
export const productSlice = createSlice({
    name: "product",
    initialState: {
        total: 0,
        skip:0,
        limit:0,
        allProduct: []
    },
    reducers:{
        SetTotal: (state, action) => {
            state.total = action.payload;
        },
        SetSkip: (state, action) => {
            state.skip = action.payload;
        },
        SetLimit: (state, action) => {
            state.limit = action.payload;
        },
        SetAllProduct: (state, action) => {
            state.allProduct = action.payload;
        }
    }
})
export default productSlice.reducer;
export const {SetTotal, SetSkip, SetLimit, SetAllProduct} = productSlice.actions;
