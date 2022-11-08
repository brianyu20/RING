import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setThreeTime } from '../src/app/dataSliceReducer';

export default function questionThree({navigation}){
    const dispatch = useDispatch()

    let firstEntry = true;
    let timeStart = null;
    if (firstEntry){
        timeStart = performance.now()
        firstEntry = false;
    }

    const pressHandler = () => {
        const timeEnd = performance.now()
        let elapsedTime = (timeEnd - timeStart) / 3600
        dispatch(incrementRating(elapsedTime))
        dispatch(setThreeTime(elapsedTime))
        navigation.navigate('InputData')
    }
    return(
        <View>
            <Text> Question 3</Text>
            <Button title = 'Start inputting Data' onPress={pressHandler}/>
        </View>
    )
}