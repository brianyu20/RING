import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
}

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState : {initialState},
    reducers: {
        setData: (state, action) => {
            console.log("got to setData in dataSlice")
            state.initialState.data = action.payload
        },
        getData: (state, action) => {
            console.log("got to getData in dataSlice")

        }
    }
})
export const selectedData = (state) => state.dataSlice.initialState.data
export const { setData } = dataSlice.actions
export default dataSlice.reducer