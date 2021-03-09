

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'native-base';
import CalendarPicker from 'react-native-calendar-picker';

export default class SpecificDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View >
        <CalendarPicker
          onDateChange={this.onDateChange}

        />

        <View>
          <Text>SELECTED DATE:{ startDate }</Text>
        </View>
      </View>
    );
  }
}
