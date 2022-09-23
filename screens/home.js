import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';


export default function HomeScreen({navigation}) {
  const pressHandler = () => {
      navigation.navigate('InputData')
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
      fontFamily : 'Courier',
      fontSize: 50,
    }
  });