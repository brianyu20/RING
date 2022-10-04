import React, { Component } from 'react';
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
  const pressHandler = () => {
      navigation.navigate('showData')
  }
  const usages = []
  const show = () => {
    axios.get('http://localhost:4000/usage')
    .then(resp => {
        usages = resp.data
        console.log(resp.data)
        

    })
  }
  return(
    <View>
  <Text>Bezier Line Chart</Text>
  <Button title = "show data" onPress={show} />
  <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            3,
            3,
            3,
            3,
            3,
            3
          ]
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