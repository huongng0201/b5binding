import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import BindingData from './BindingData'
export default function App(){
  return(
    <View style={styles.container}>

      <BindingData />
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#f8bbd0',
  }
})