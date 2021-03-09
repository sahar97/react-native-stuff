import React, { Component } from 'react';
import {  View, Text ,StyleSheet} from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";

import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements'

export default class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.container} >

        <Icon 
        style={styles.iconStyle}
  name='menu'
  size={40}
  color='white'
   />

   <Text style={styles.mainText}>I'd like to book a meeting with the bussiness development at/on...</Text>
       <View style={styles.btnsContainer}>
       <Button 
       onPress={() =>this.props.navigation.navigate("Date")}
       success style={styles.btnStyle}><Text style={styles.btnText}>Date</Text></Button>

       <Button 
       onPress={() =>this.props.navigation.navigate("Time")}
       success style={styles.btnStyle}><Text style={styles.btnText}>Time</Text></Button>
       </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00bfff',
height:'100%',
    paddingTop:50,
  },
  iconStyle:{
    padding:20,
    display:'flex',
  //  justifyContent:'flex-start',
    alignItems:'flex-end'
  },
  mainText:{
    fontSize:18,
    paddingLeft:20,
    lineHeight:50,
    color:'white'
  },
  btnStyle:{
    backgroundColor:'white',
    width:100,
    height:50,
display:'flex' ,
justifyContent:'center',
borderRadius:40
 },

 btnText:{
   color:'#00bfff',
   fontSize:20
 },
 btnsContainer:{
   padding:70,
   display:'flex',
   alignItems:'center',
   flexDirection:'row-reverse',
   justifyContent:'space-between'
 }


}
  )