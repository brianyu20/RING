import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector, useState } from 'react-redux'
import { selectedData, setData } from "../src/app/dataSliceReducer"
import { store } from "../src/app/store"
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
  const reduxData = useSelector(selectedData)
  //const [reduxData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]);
  console.log("getting to useSelector, reduxData is: " + reduxData)
  const pressHandler = () => {
      navigation.navigate('showData')
  }
  let display = false
  let data = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
  console.log("data before processing: " + data)
  let temp = [100, 50, 0, 30, 100, 0, 0, 0, 100, 0,]
  const show = () => {
    axios.get('http://localhost:4000/usage')
    .then(resp => {
        let usages = resp.data
        //console.log(resp.data)
        //to see the object structure
        for (let i = 0; i < usages.length; i++){
          for (const key in usages[i]){
            console.log(`for ${key} : ${usages[i][key]} `)
          }
        }

        //first trying to group by age and snow usage
        for (let i = 0; i < usages.length; i++){
          if (typeof usages[i]["age"] ==  "string" && usages[i]["age"] > 20 && usages[i]["age"] < 30){
            //console.log("entering?")
            let currAge = parseInt(usages[i]["age"], 10);
            let currIndex = currAge % 20;
            data[currIndex] += parseInt(usages[i]["snow"], 10)
          }
        }
        display = true
        console.log("data: " + data)
        dispatch(setData(data))
        

    })
  }
  //show()
  return(
    <View>
  <Text>Bezier Line Chart</Text>
  <Button title = "show data" onPress={show} />
  <LineChart
    data={{
      labels: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
      datasets: [
        {
          data: reduxData
         
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="$"
    yAxisSuffix="k"
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
    }
  });