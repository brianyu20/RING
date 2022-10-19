import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";


export default function showData({navigation}) {
  const [selectedData, setSelectedData] = useState([]);
  const pressHandler = () => {
      navigation.navigate('showData')
  }
  
  let usages = []
  const show = () => {
    axios.get('http://localhost:4000/usage')
    .then(resp => {
        usages = resp.data
        //console.log("this is the log: " + usages)
        for (let i = 0; i < 20; i++){
          console.log(usages[i])
        }
    })
  }

  const calculate = () => {
    // let snowAverageByAge = []
    //     for (let i = 0; i < usages.length; i++){
    //       snowAverageByAge[usages[i].age - 20] = snowAverageByAge[usages[i].age -20] + usages[i].snow
    //       //need to divide by total number of entries for that age
    //     }
    // return snowAverageByAge
  }

  

  
  return(
    <View>
      <Button title = "show log on console" onPress={show}/>
      
  <Text>Bezier Line Chart</Text>
  <Button title = "calculate data" onPress={calculate} />
  <LineChart
    data={{
      labels: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"],
      datasets: [
        {
          data: selectedData //[4, 6, 7, 9, 0] // use usestate to set this as null at first, and then press show data to calculate
          // the averages so that data will be set to the calculated data
          
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel=""
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