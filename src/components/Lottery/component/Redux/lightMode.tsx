import {createSlice} from "@reduxjs/toolkit";

export interface lightModeState {
    lightMode: boolean;
}

export const lightMode = createSlice({
    name : 'lightMode',
    initialState: true,
    reducers: {
        changeLightMode(state,action){
            state = action.payload;
            return state
        }
    },
});

export const {changeLightMode} = lightMode.actions