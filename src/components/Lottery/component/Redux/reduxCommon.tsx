import {configureStore} from "@reduxjs/toolkit";
import {lightMode} from "./lightMode";

export default configureStore({
    reducer: {
        lightMode : lightMode.reducer
    }
})
