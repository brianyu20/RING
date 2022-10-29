import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    selectedData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    selectedPieData: [
        {
            name: "20", 
            population: 0, 
            color: "blue", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "21", 
            population: 0, 
            color: "black", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "22", 
            population: 0, 
            color: "red", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "23", 
            population: 0, 
            color: "blue", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "24", 
            population: 0, 
            color: "black", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "25", 
            population: 0, 
            color: "red", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "26", 
            population: 0, 
            color: "blue", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "27", 
            population: 0, 
            color: "black", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "28", 
            population: 0, 
            color: "red", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "29", 
            population: 0, 
            color: "blue", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        // {
        //     name: "Seoul",
        //     population: 21500000,
        //     color: "rgba(131, 167, 234, 1)",
        //     legendFontColor: "#7F7F7F",
        //     legendFontSize: 15
        //   },
        //   {
        //     name: "Toronto",
        //     population: 2800000,
        //     color: "#F00",
        //     legendFontColor: "#7F7F7F",
        //     legendFontSize: 15
        //   },
        //   {
        //     name: "Beijing",
        //     population: 527612,
        //     color: "red",
        //     legendFontColor: "#7F7F7F",
        //     legendFontSize: 15
        //   },
        //   {
        //     name: "New York",
        //     population: 8538000,
        //     color: "#ffffff",
        //     legendFontColor: "#7F7F7F",
        //     legendFontSize: 15
        //   },
        //   {
        //     name: "Moscow",
        //     population: 11920000,
        //     color: "rgb(0, 0, 255)",
        //     legendFontColor: "#7F7F7F",
        //     legendFontSize: 15
        //   }

    ],
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
        setSelectedBezierData: (state, action) => {
            console.log("got to setSelectedBezierData in dataSlice")
            state.initialState.selectedData = action.payload
        },
        setSelectedPieData: (state, action) => {
            console.log("got to setSelectedPieData in dataSliceReducer")
            state.initialState.selectedPieData = action.payload
        }
    }
})
export const allData = (state) => state.dataSlice.initialState.data
export const getSelectedData = (state) => state.dataSlice.initialState.selectedData
export const getSelectedPieData = (state) => state.dataSlice.initialState.selectedPieData
export const alcData = (state) => state.dataSlice.initialState.alcData
export const weedData = (state) => state.dataSlice.initialState.weedData
export const snowData = (state) => state.dataSlice.initialState.snowData
export const { setData , setSelectedBezierData, setSelectedPieData } = dataSlice.actions
export default dataSlice.reducer