import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setTwoTime } from "../src/app/dataSliceReducer"

export default function questionTwo({navigation}){
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
        dispatch(setTwoTime(elapsedTime))
        navigation.navigate('questionThree')
    }
    return(
        <View>
            <Text> Question 2</Text>
            <Button title = 'go to question 3' onPress={pressHandler}/>
        </View>
    )
}