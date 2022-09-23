import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';


export default function HomeScreen({navigation}) {
  const pressHandler = () => {
      navigation.navigate('InputData')
  }
  return(
    <View style={styles.container}>
      <Text style={styles.title}>THE RING</Text>
      <Button title = 'Start inputting Data' onPress={pressHandler}/>
    </View>
  )
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    }
  });