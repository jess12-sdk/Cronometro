import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './assets/Estilos';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
    
    setInterval(
      () => {this.setState({date: new Date()})},
      1000
    );
  }

  render(){
    return(
    <Text style={styles.textHora}>HORA: {this.state.date.toLocaleTimeString()}</Text>
    );
  }
}

export default class ClockApp extends Component {
  render() {
    return (
      <View style={styles.textHora}>
        <Clock />
      </View>
    );
  }
}
