
import React, { Component } from 'react';
import { Button, View, Text,TouchableOpacity, ScrollView } from 'react-native';

import StyleSheet from './style';
import { Dropdown } from 'react-native-material-dropdown';
import { Switch } from 'react-native-gesture-handler';


export default class Homescreen extends Component {
    state = {switchValue:false}
  toggleSwitch = (value) => {
      //onValueChange of the switch this function will be called
      this.setState({switchValue: value})
      //state changes according to switch
      //which will result in re-render the text
   }
  render() {
    let dataGenero = [{
        value: 'Femenino',
      }, {
        value: 'Masculino',
      }, {
        value: 'Unisex',
      }];

      let dataColor = [{
        value: 'Negro',
      }, {
        value: 'Rojo',
      }, {
        value: 'Blanco',
      }, {
        value: 'Gris',
      }, {
        value: 'Azul',
      }, {
        value: 'Verde',
      }, {
        value: 'Morado',
      },{
        value: 'Amarillo',
      },{
        value: 'Rosado',
      },{
        value: 'Beige',
      },{
        value: 'Naranjado',
      }
    ];
    let dataPrecio = [{
        value: '25.000',
      }, {
        value: '50.000',
      },{
        value: '100.000',
      }, {
        value: '150.000',
      },{
        value: '200.000',
      },{
        value: '250.00',
      }];

      let dataMarca = [{
        value: 'Nike',
      }, {
        value: 'Adidas',
      },{
        value: 'Zara',
      }, {
        value: 'Bershka',
      },{
        value: 'Gef',
      },{
        value: 'Tennis',
      }];
      

    return (
      <ScrollView style={{padding:10, margin:10}}>
      <View >
      <Text></Text>
      <Text></Text>

      <Dropdown
        label='Género'
        data={dataGenero}
      />

        <Dropdown
        label='Color'
        data={dataColor}
      />

        <Dropdown
        label='Precio'
        data={dataPrecio}
      />

      <Dropdown
        label='Marca'
        data={dataMarca}
      />
    <Text></Text>
            <View>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
              <Switch
                onValueChange = {this.toggleSwitch}
                value = {this.state.switchValue}
              />
              <Text style={{paddingLeft: 10}}>Descuentos</Text>
            </View>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('Resultados') }}>
          <Text style={{color:'#FFFFFF'}} > Aplicar </Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('Home') }}>
          <Text style={{color:'#FFFFFF'}} > Volver </Text>
        </TouchableOpacity>
           </View>
           

          </View>

     
  
      </View>
      
    
      </ScrollView>
    )
  }
}