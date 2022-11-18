import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    selectedData: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    selectedPieData: [
        {
            name: "20", 
            population: 0, 
            color: "#f0f8ff", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "21", 
            population: 0, 
            color: "#8a2be2", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "22", 
            population: 0, 
            color: "#ff1493", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "23", 
            population: 0, 
            color: "#d2691e", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "24", 
            population: 0, 
            color: "#dc143c", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "25", 
            population: 0, 
            color: "#00008b", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "26", 
            population: 0, 
            color: "#006400", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "27", 
            population: 0, 
            color: "#ff8c00", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "28", 
            population: 0, 
            color: "#9400d3", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
        {
            name: "29", 
            population: 0, 
            color: "#ffd700", 
            legendFontColor: "#7F7F7F", 
            legendFontSize: 15
        },
    ],
    rating: 0,
    //from home to q1
    timeHome: 0,
    timeOne : 0,
    timeTwo: 0,
    timeThree: 0,
    ansOne: "",
    ansTwo: "",
    ansThree: "",
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
        },
        incrementRating: (state, action) => {
            console.log("got to incrementRating")
            state.initialState.rating += action.payload
        },
        setHomeTime: (state, action) => {
            state.initialState.timeHome = action.payload
        },
        setOneTime: (state, action) => {
            state.initialState.timeOne = action.payload
        },
        setTwoTime: (state, action) => {
            state.initialState.timeTwo = action.payload
        },
        setThreeTime: (state, action) => {
            state.initialState.timeThree = action.payload
        },
        setAnsOne: (state, action) => {
            state.initialState.ansOne = action.payload
        },
        setAnsTwo: (state, action) => {
            state.initialState.ansTwo = action.payload
        },
        setAnsThree: (state, action) => {
            state.initialState.ansThree = action.payload
        },
    }
})
export const allData = (state) => state.dataSlice.initialState.data
export const getSelectedData = (state) => state.dataSlice.initialState.selectedData
export const getSelectedPieData = (state) => state.dataSlice.initialState.selectedPieData
export const alcData = (state) => state.dataSlice.initialState.alcData
export const weedData = (state) => state.dataSlice.initialState.weedData
export const snowData = (state) => state.dataSlice.initialState.snowData
export const getRating = (state) => state.dataSlice.initialState.rating
export const getHomeTime = (state) => state.dataSlice.initialState.timeHome
export const getOneTime = (state) => state.dataSlice.initialState.timeOne
export const getTwoTime = (state) => state.dataSlice.initialState.timeTwo
export const getThreeTime = (state) => state.dataSlice.initialState.timeThree
export const getAnsOne = (state) => state.dataSlice.initialState.ansOne
export const getAnsTwo = (state) => state.dataSlice.initialState.ansTwo
export const getAnsThree = (state) => state.dataSlice.initialState.ansThree

export const { setData , 
    setHomeTime, 
    setSelectedBezierData, 
    setSelectedPieData, 
    incrementRating, 
    setOneTime, 
    setThreeTime, 
    setTwoTime,
    setAnsOne,
    setAnsTwo,
    setAnsThree, } = dataSlice.actions
export default dataSlice.reducer