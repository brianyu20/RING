import React, { Component } from 'react';
import { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector, } from 'react-redux'
import { allData, setData, setSnowData } from "../src/app/dataSliceReducer"

export default function InputData({navigation}) {
    const [age, setAge] = useState("");
    const [zip, setZip] = useState("");
    const [alc, setAlc] = useState("");
    const [weed, setWeed] = useState("");
    const [snow, setSnow] = useState("");
    const dispatch = useDispatch()

    const putOne = () => {
      if (age === '' || zip === '' || alc === '' || weed === '' || snow === ''){
        alert('All fields are required');
        return;
      }
      axios.post('http://localhost:4000/usage', {age, zip, alc, weed, snow})
      .then(function(response){
        //console.log(response);
        //console.log("age" + testData.age);
        console.log(response);
        alert('Data is submitted sucessfully');
        //dispatching it state right away 
        processData();
      })
      .catch(function(error){
        console.log(error);
      });
    }

    const processData = () => {
      axios.get('http://localhost:4000/usage')
      .then(resp => {
          let usages = resp.data
          dispatch(setData(usages))
      })
      .catch(function(error){
        console.log(error)
      })
    }

    const pressHandler = () => {
      navigation.navigate('showData')
    }
//hhass
    return(
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: '#000000'}}>Input your data</Text>
        <View style={{ marginHorizontal: 24 }}>
          <Text style = {{fontSize: 16, color : '#8e93a1'}}> Age </Text>
          <TextInput style = {styles.inputBox} value = {age} onChangeText = {text => setAge(text)} />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color:'#8e93a1' }}>ZIP code</Text>
          <TextInput style = {styles.inputBox} value = {zip} onChangeText = {text => setZip(text)} />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color:'#8e93a1' }}>Drinks per week</Text>
          <TextInput style = {styles.inputBox} value = {alc} onChangeText = {text => setAlc(text)} />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color:'#8e93a1' }}>Grams of weed per week</Text>
          <TextInput style = {styles.inputBox} value = {weed} onChangeText = {text => setWeed(text)} />
        </View>
        <View style={{ marginHorizontal: 24 }}>
          <Text style={{ fontSize: 16, color:'#8e93a1' }}>Lines per week</Text>
          <TextInput style = {styles.inputBox} value = {snow} onChangeText = {text => setSnow(text)} />
        </View>
        <Button title = 'Submit Data' onPress={putOne} />
        <Button title = 'Redux Bypass' onPress={processData} />
        <Button title = 'Go to NYC aggregate Data' onPress={pressHandler}/> 
      </View>
    )
  }
  //this is another change 
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