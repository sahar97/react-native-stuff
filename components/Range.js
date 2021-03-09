import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import DatepickerRange from 'react-native-range-datepicker';

export default class Range extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null,

    };
  }


  render() {
    
      return(
      <View style={styles.container}>
          
          
    <DatepickerRange
    //startDate= '13052017'
   //untilDate= '26062017'
    onConfirm= {( startDate, untilDate ) => this.setState({ startDate, untilDate })}
/>
</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});















































