import React, { Component } from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setThreeTime, setAnsThree } from '../src/app/dataSliceReducer';

export default function questionThree({navigation}){
    const dispatch = useDispatch()
    const [ans, setAns] = useState("");
    let firstEntry = true;
    let timeStart = null;
    if (firstEntry){
        timeStart = performance.now()
        firstEntry = false;
    }

    const pressHandler = () => {
        if (ans === ""){
            alert("An answer is required")
            return
        }
        dispatch(setAnsThree(ans))
        const timeEnd = performance.now()
        let elapsedTime = (timeEnd - timeStart) / 3600
        dispatch(incrementRating(elapsedTime))
        dispatch(setThreeTime(elapsedTime))
        navigation.navigate('InputData')
    }
    return(
        <View>
            <Text> How would you summarize how your feeling in one word?</Text>
            <TextInput style = {styles.inputBox} value = {ans} onChangeText = {text => setAns(text)} />
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
    inputBox: {
      borderBottomWidth: 0.5,
      height: 48,
      borderBottomColor: '#000000',
      marginBottom: 5,
      alignItems: 'center'
    }
  });