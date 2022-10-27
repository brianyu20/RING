import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    startTime : 1,
}

export const timeSlice = createSlice({
    name: "timeSlice",
    initialState : {initialState},
    reducers: {
        incrementTime: (state, action) => {
            console.log("got here")
            state.initialState.startTime += 1;
            console.log(state.initialState.startTime)
        },
    }
})

export const { incrementTime } = timeSlice.actions
export default timeSlice.reducer