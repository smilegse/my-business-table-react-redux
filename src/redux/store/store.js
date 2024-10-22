import {configureStore} from "@reduxjs/toolkit";
import settingsReducer from "../state/product/settings-slice";
import productReducer from "../state/product/product-slice";

export default configureStore({

    reducer: {
        settings: settingsReducer,
        product: productReducer
    }

})