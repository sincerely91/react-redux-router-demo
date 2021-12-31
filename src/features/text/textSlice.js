import { createSlice } from "@reduxjs/toolkit";

export const textSlice = createSlice({
    name: 'text',
    initialState: {
        value: 'Hello World',
    },
    reducers: {
        addText: (state) => {
            state.value = 'Lorem ipsum'
        },
        removeText: (state) => {
            state.value = 'Hello World'
        },
        addByText: (state, action) => {
            state.value = action.payload
        },
        
    },
})


export const { addText, removeText, addByText } = textSlice.actions;

export default textSlice.reducer;