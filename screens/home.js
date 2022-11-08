import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setHomeTime } from "../src/app/dataSliceReducer"

export default function HomeScreen({navigation}) {
  const dispatch = useDispatch()
  const pressHandler = () => {
      const timeEnd = performance.now()
      let elapsedTime = (timeEnd - timeStart) / 3600
      dispatch(incrementRating(elapsedTime))
      dispatch(setHomeTime(elapsedTime))
      navigation.navigate('questionOne')
  }
  let firstEntry = true;
  let timeStart = null;
  if (firstEntry){
    timeStart = performance.now()
    firstEntry = false;
  }

  return(
    <View style={styles.container}>
      <Text style={styles.header}>The Ring</Text>
      <Button title = 'Start inputting Data' onPress={pressHandler}/>
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