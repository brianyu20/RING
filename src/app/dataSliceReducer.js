import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    selectedData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    alcData : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    weedData : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    snowData : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
}

export const dataSlice = createSlice({
    name: "dataSlice",
    initialState : {initialState},
    reducers: {
        setData: (state, action) => {
            console.log("got to setData in dataSlice")
            state.initialState.data = action.payload
            console.log(state.initialState.data)
        },
        setSelectedData: (state, action) => {
            console.log("got to setSelectedData in dataSlice")
            state.initialState.selectedData = action.payload
        }
    }
})
export const allData = (state) => state.dataSlice.initialState.data
export const getSelectedData = (state) => state.dataSlice.initialState.selectedData
export const alcData = (state) => state.dataSlice.initialState.alcData
export const weedData = (state) => state.dataSlice.initialState.weedData
export const snowData = (state) => state.dataSlice.initialState.snowData
export const { setData , setSelectedData } = dataSlice.actions
export default dataSlice.reducer