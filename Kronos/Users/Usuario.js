import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import StyleSheet from '../style'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default class Usuarios extends Component {
  render() {
    return (
      <View style={{ flex: 1,  alignItems: "center", paddingVertical:10}}>
          <View style={{  flexDirection:'row'}}>

   <Icon name="user-circle" color='#000000' size={60} style={{padding:10}}></Icon> 
    
       <Text style={{textAlign: 'center', fontSize:18, fontWeight: 'bold', paddingVertical:30, paddingHorizontal:10 }}>{global.email} </Text>
       </View>
       <View style={{borderBottomColor:'black', borderBottomWidth:2, width: '100%'}}></View>

       
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('LogIn') }}>
          <Text style={{fontSize:20, padding:10}}> Sign Out </Text>
        </TouchableOpacity>
        <View style={{borderBottomColor:'black', borderBottomWidth:2, width: '100%'}}></View>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('EditarInformacion') }}>
          <Text style={{fontSize:20, padding:10}}> Editar Información </Text>
        </TouchableOpacity>
        <View style={{borderBottomColor:'black', borderBottomWidth:2, width: '100%'}}></View>
      </View>
    );
  }
}
