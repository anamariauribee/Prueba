import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import StyleSheet from './style'

export default class Resultados extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Resultados</Text>
        <TouchableOpacity style={StyleSheet.sugerencias} onPress={()=>{this.props.navigation.navigate('Home') }}>
          <Text > Volver </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
