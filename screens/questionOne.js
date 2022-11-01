import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setOneTime } from "../src/app/dataSliceReducer"


export default function questionOne({navigation}){
    const dispatch = useDispatch()
    let firstEntry = true;
    let timeStart = null;
    if (firstEntry){
        timeStart = performance.now()
        firstEntry = false;
    }
    const pressHandler = () => {
        const timeEnd = performance.now()
        let elapsedTime = timeEnd - timeStart
        dispatch(incrementRating(elapsedTime))
        dispatch(setOneTime(elapsedTime))
        navigation.navigate('questionTwo')
    }
    return(
        <View>
            <Text> Question 1</Text>
            <Button title = 'Go to question 2' onPress={pressHandler}/>
        </View>
    )
}