import React from "react";
import {Component} from 'react';
import moment from "moment";
import DateRangePicker from "react-native-daterange-picker";
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import { Container, Item, Form, Input, Button, Label } from "native-base";
import * as firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements'
import { NavigationEvents } from "react-navigation";
import {DatePicker} from 'react-native-datepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatepickerRange from 'react-native-range-datepicker';
import SpecificDate from './SpecificDate'
//import DatePicker from 'react-native-date-ranges';
import Range from './Range'

export default class DateScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'',
      color1:'',
      color2:'',
      specific:true,
      date:'1-1-2019',
    textDecoration1:'',
    textDecoration2:'',
      displayedDate: moment(),
      selectedStartDate: null,
      selectedEndDate: null,
    };
  }


  setDates = (dates) => {
    this.setState({
      ...dates,
    });
  };

  pressed(){
      this.setState({
          color1:'blue',
color2:'gray',

specific:true
      })
    
  }


  
  pressed1(){
    this.setState({
        color1:'gray',
color2:'blue',
specific:false,
textDecoration2:'underline'
    })
}

 
handleConfirm = (date) => {
  console.warn("A date has been picked: ", date);
  hideDatePicker();
};

datePrint(){
    if(this.state.specific){
        return(<SpecificDate/>)
    }
    else 
    return(<Range/>)

}

render() {
    return (
      <View style={styles.container}>
<View style={styles.dateHeader}>
    <Icon
    name="keyboard-backspace"
    color='gray'
    onPress={()=>this.props.navigation.navigate("About")}/>
    <Text style={styles.mainText}>Custom date </Text>
</View>

<View style={styles.btnContainer}>
<Icon
    name="keyboard-backspace"
    color='gray'
    onPress={()=>this.props.navigation.navigate("About")}/>
<TouchableOpacity onPress={()=>{this.pressed()
    this.setState({specific:true,
      textDecoration2:'none',
      textDecoration1:'underline'})
}} ><Text  style={{color:this.state.color1,textDecorationLine:this.state.textDecoration1}}>Specific Dates</Text></TouchableOpacity>
<TouchableOpacity onPress={()=>{this.pressed1()
this.setState({specific:false,
textDecoration2:'underline',
textDecoration1:'none'})}} ><Text  style={{color:this.state.color2,textDecorationLine:this.state.textDecoration2}}>Range</Text></TouchableOpacity>

</View>
{this.datePrint()}


      
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 50,
      },

  dateHeader:{
      paddingRight:150,
      paddingLeft:70,
      display:'flex',
      justifyContent:'space-between',
      flexDirection:"row-reverse"
  },

  btnStyle:{
      backgroundColor:'white',
  },
  btnContainer:{
      padding:70,
      paddingBottom:0,
      display:'flex',
      flexDirection:'row-reverse',
      justifyContent:'space-between'
  },
  mainText:{
      fontSize:20
  },
  mainView:{
      paddingTop:200,
      backgroundColor:'red'
  }
});