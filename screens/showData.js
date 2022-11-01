import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux'
import { allData,
  getRating, 
  setSelectedBezierData, 
  setSelectedPieData, 
  getSelectedData, 
  getSelectedPieData,
  getHomeTime,
  getOneTime,
  getTwoTime,
  getThreeTime, } from "../src/app/dataSliceReducer"
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit";

export default function ShowData({navigation}) {
  const dispatch = useDispatch()
  let showedAlc = false;
  let showedWeed = false;
  let showedSnow = false;
  let currAllData = useSelector(allData)
  let currShowdata = useSelector(getSelectedData)
  let currShowPieData = useSelector(getSelectedPieData)
  let currRating = useSelector(getRating)
  let currTimeHome = useSelector(getHomeTime)
  let currTimeOne = useSelector(getOneTime)
  let currTimeTwo = useSelector(getTwoTime)
  let currTimeThree = useSelector(getThreeTime)

  const chartConfig = {
    backgroundGradientFrom: "red",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "red",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(40, 67, 135, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  let pieDefault = [
    {
        name: "20", 
        population: 0, 
        color: "#f0f8ff", 
        legendFontColor: "#7F7F7F", 
        legendFontSize: 15
    },
    {
        name: "21", 
        population: 10, 
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

  ]

  const pressHandler = () => {
      navigation.navigate('showData')
  }

  const showSnow = () => {
    let snowData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    let snowPieData = pieDefault
    console.log("here")
    processBezier(currAllData, snowData, "snow")
    processPie(currAllData, snowPieData, "snow")
    for (let i = 0; i < snowPieData.length; i++){
      for (var key in snowPieData[i]){
        console.log("key: " + key + " value: " + snowPieData[i][key])
      }
    }
    dispatch(setSelectedBezierData(snowData))
    dispatch(setSelectedPieData(snowPieData))
  }


  const showAlc = () => {
    let alcData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    let alcPieData = pieDefault
    processBezier(currAllData, alcData, "alc")
    processPie(currAllData, alcPieData, "alc")
    dispatch(setSelectedBezierData(alcData))
    dispatch(setSelectedPieData(alcPieData))
  }

  const showWeed = () => {
    let weedData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    let weedPieData = pieDefault
    processBezier(currAllData, weedData, "weed")
    processPie(currAllData, weedPieData, "weed")
    dispatch(setSelectedBezierData(weedData))
    dispatch(setSelectedPieData(weedPieData))
  }

  const processBezier = (allData, selectData, type) => {
    for (let i = 0; i < allData.length; i++){
      if (typeof allData[i]["age"] ==  "string" && parseInt(allData[i]["age"]) >= 20 && parseInt(allData[i]["age"]) < 30){
        let currAge = parseInt(allData[i]["age"], 10);
        let currIndex = currAge % 20;
        selectData[currIndex] += parseInt(allData[i][type], 10)
      }
    }
  }

  const processPie = (allData, selectPieData, type) => {
    for (let i = 0; i < allData.length; i++){
      if (typeof allData[i]["age"] ==  "string" && allData[i]["age"] > 20 && allData[i]["age"] < 30){
        //console.log("age in string: " + allData[i]["age"])
        let currAge = parseInt(allData[i]["age"], 10)
        let currIndex = currAge % 20;
        console.log("currAge: " + currAge)
        selectPieData[currIndex]["population"] += parseInt(allData[i][type])
      }
    }
  }

  return(
    <View>
      <Text>Click to show data</Text>
      <View>
      <Button title = "alc" onPress={showAlc} />
        <Button title = "weed" onPress={showWeed} />
        <Button title = "snow" onPress={showSnow} />
      </View>
        
      <Text> Rating: {currRating} </Text>
      <Text> Time spend on home screen: {currTimeHome} </Text>
      <Text> Time spend on question 1: {currTimeOne} </Text>
      <Text> Time spend on question 2: {currTimeTwo} </Text>
      <Text> Time spend on question 3: {currTimeThree} </Text>

     
      <LineChart
        data={{
          labels: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
          datasets: [
            {
              data: currShowdata
            }
          ]
        }}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="lines"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
      />
      <PieChart
        data={currShowPieData}
        width={Dimensions.get("window").width}
        height={220}
        chartConfig={chartConfig}
        accessor={"population"}
        backgroundColor={"#20b2aa"}
        paddingLeft={"15"}
        center={[10, 18]}
        absolute
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe4e1',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  header : {
    //fontFamily : 'Courier',
    fontSize: 25,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

