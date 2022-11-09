import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { incrementRating, setTwoTime, setAnsTwo } from "../src/app/dataSliceReducer"
import RNPickerSelect from 'react-native-picker-select';

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
            <Text> How do you generally feel about your susbtance use?</Text>
            <Text> Choose the option that describes what you feel the closest!</Text>
            <RNPickerSelect
                onValueChange={(value) => dispatch(setAnsTwo(value))}
                items={[
                    { label: 'Fine, but not great', value: '1' },
                    { label: 'I did as much as I planned!', value: '2' },
                    { label: 'Thinking about doing less', value: '3' },
                ]}
            />
            <Button title = 'go to question 3' onPress={pressHandler}/>
        </View>
    )
}