import {configureStore} from "@reduxjs/toolkit";
import {settingsSlice} from "../state/business-table/settings-slice.js";

export default configureStore({

    reducer: {
        settings: settingsSlice
    }

})