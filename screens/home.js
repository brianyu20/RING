import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementTime } from "../src/app/timeSliceReducer"

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch()
  const pressHandler = () => {
      navigation.navigate('InputData')
  }
  const reduxTry = () =>{
    dispatch( incrementTime())
    //console.log(state.startTime)
  }
  return(
    <View style={styles.container}>
      <Text style={styles.header}>The Ring</Text>
      <Button title = 'Start inputting Data' onPress={pressHandler}/>
      <Button title = "redux" onPress = {reduxTry} />
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
      fontSize: 50,
    }
  });