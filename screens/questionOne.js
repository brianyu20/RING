import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setOneTime, setAnsOne } from "../src/app/dataSliceReducer"
import RNPickerSelect from 'react-native-picker-select';



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
        let elapsedTime = (timeEnd - timeStart) / 3600
        dispatch(incrementRating(elapsedTime))
        dispatch(setOneTime(elapsedTime))
        navigation.navigate('questionTwo')
    }
    return(
        <View>
            <Text> How are you feeling today?</Text>
            <RNPickerSelect
                onValueChange={(value) => dispatch(setAnsOne(value))}
                items={[
                    { label: 'Great. What a day!', value: '1' },
                    { label: 'Eh, could be better', value: '2' },
                    { label: 'Screw this day', value: '3' },
                ]}
            />
            <Button title = 'Go to question 2' onPress={pressHandler}/>
        </View>
    )
    //testing
}