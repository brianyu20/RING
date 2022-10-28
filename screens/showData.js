import React, { Component } from 'react';
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector, } from 'react-redux'
import { allData, setSelectedData, getSelectedData } from "../src/app/dataSliceReducer"
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";

export default function showData({navigation}) {
  const dispatch = useDispatch()
  let showedAlc = false;
  let showedWeed = false;
  let showedSnow = false;
  let currAllData = useSelector(allData)
  let currShowdata = useSelector(getSelectedData)

  const pressHandler = () => {
      navigation.navigate('showData')
  }

  const showSnow = () => {
    let snowData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    process(currAllData, snowData, "snow")
    dispatch(setSelectedData(snowData))
  }

  const showAlc = () => {
    let alcData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    process(currAllData, alcData, "alc")
    dispatch(setSelectedData(alcData))
  }

  const showWeed = () => {
    let weedData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
    process(currAllData, weedData, "weed")
    dispatch(setSelectedData(weedData))
  }

  const process = (allData, selectData, type) => {
    for (let i = 0; i < allData.length; i++){
      if (typeof allData[i]["age"] ==  "string" && allData[i]["age"] > 20 && allData[i]["age"] < 30){
        let currAge = parseInt(allData[i]["age"], 10);
        let currIndex = currAge % 20;
        selectData[currIndex] += parseInt(allData[i][type], 10)
      }
    }
  }
  
  return(
    <View>
      <Text>Click to show data</Text>
        <Button title = "alc" onPress={showAlc} />
        <Button title = "weed" onPress={showWeed} />
        <Button title = "snow" onPress={showSnow} />
     
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