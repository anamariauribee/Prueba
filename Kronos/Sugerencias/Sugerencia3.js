import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import StyleSheet from '../style'

export default class Sugerencia3 extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Sugerencia 3</Text>
        <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('Home') }}>
          <Text > Volver </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
