import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import StyleSheet from '../style'

export default class Ajustes extends Component {
  render() {
    return (
      <View style={{  alignItems: "center" }}>
      <TouchableOpacity onPress={()=>{this.props.navigation.navigate('CambiarContrasena') }}>
          <Text style={{fontSize:20, padding:10}}> Cambiar Contraseña </Text>
        </TouchableOpacity>
        <View style={{borderBottomColor:'black', borderBottomWidth:2, width: '100%'}}></View>
        
      </View>
    );
  }
}
