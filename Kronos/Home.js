import React, {Component } from 'react';
import { Button, View, Text,TouchableOpacity, ScrollView, TextInput, Image, Alert, ImageBackground } from 'react-native';

import StyleSheet from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


export default class App extends Component {
  constructor(props){
    super(props);  
    this.state ={ 
      buscar:'',
    
    }
    this.verificar = this.verificar.bind(this);
  }
 

verificar (){ 
  let reg2 = /^[a-zA-Z0-9]*$/


  if(this.state.buscar.length<31 && this.state.buscar.length>0){
      if(reg2.test(this.state.buscar)==true ){

            
    this.setState({buscar:''})
  this.props.navigation.navigate('Resultados');

} else{
  Alert.alert('Error', 'Búsqueda inválida')
}
      } else {
        Alert.alert('Error', 'No cumple con número de caracteres necesarios')
      } 



}
render(){
    
    return (
      <ScrollView style={{padding:10, margin:10}}>
         <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
        
         <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('Filtros') }}>
         <Icon name="bars" color='#000000' size={30}></Icon> 
         </TouchableOpacity>
         <View style={{flex:0.5}}></View>
          <TextInput placeholder="Buscar" style={{width:300}}  autoCorrect={ false } 
         value={String(this.state.buscar)}
         returnKeyLabel = {"next"}
         onChangeText={(text) => this.setState({buscar: text})}
        ></TextInput>
             <TouchableOpacity  onPress={() => {
            this.verificar();
          }}>
          <Icon name="search" color='#000000' size={20}> </Icon>
        </TouchableOpacity>
        
        <Text> </Text>
            </View>
        <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        <Image source={require('./Images/logos.png')}  style={{height: 90,
        width: 90}}/>
        <Text style={{fontSize:40}}>KRONOS</Text>
        
      <View style={{ flex: 1, alignItems: 'center'}}>
        
      <Text></Text>
      <Text></Text>
      

            </View>
        <Text style={{fontSize:20}}>Sugerencias</Text>
        <Text></Text>

       <Text></Text>
       <View style={{flexDirection:'row',  justifyContent: 'space-between'}} >
       <TouchableOpacity style={{
          backgroundColor:'#191970', 
          height:50, 
          width:200,
          alignItems: 'center',
          justifyContent:'center',
          padding: 10,
          flexDirection: 'row',
          borderColor:'#FFFFFF',
          borderWidth:2,
          flex: 0,}} 
          onPress={()=>{this.props.navigation.navigate('Sugerencia2') }}>
          
          <Text  style={{color:'#FFFFFF'}}> Hombre   </Text>
          <Icon2 name="gender-male" color='#FFFFFF' size={30}></Icon2> 
    
          </TouchableOpacity>


          <View style={{flex:0.9}}></View>
    
          <TouchableOpacity style={{
          backgroundColor:'#C71585', 
          height:50, 
          width:200,
          alignItems: 'center',
          justifyContent:'center',
          padding: 10,
          flexDirection: 'row',
          borderColor:'#FFFFFF',
          borderWidth:2,
          flex: 0,}} 
          onPress={()=>{this.props.navigation.navigate('Sugerencia2') }}>
          
          <Text  style={{color:'#FFFFFF'}}> Mujer   </Text>
          <Icon2 name="gender-female" color='#FFFFFF' size={30}></Icon2> 
    
          </TouchableOpacity>

        </View>
        
        <Text></Text>
        <Text></Text>
    
        <View style={{flexDirection:'row',  justifyContent: 'space-between', paddingHorizontal:20}} >
        
          <TouchableOpacity style={{
          backgroundColor:'#4B0082', 
          height:50, 
          width:200,
          alignItems: 'center',
          justifyContent:'center',
          padding: 10,
          flexDirection: 'row',
          borderColor:'#FFFFFF',
          borderWidth:2,
          flex: 0,}} 
          onPress={()=>{this.props.navigation.navigate('Sugerencia2') }}>
          
          <Text  style={{color:'#FFFFFF'}}> Accesorios   </Text>
          <Icon2 name="sunglasses" color='#FFFFFF' size={30}></Icon2> 
    
          </TouchableOpacity>

          <View style={{flex:0.9}}></View>
    
          <TouchableOpacity style={{
          backgroundColor:'#8B4513', 
          height:50, 
          width:200,
          alignItems: 'center',
          justifyContent:'center',
          padding: 10,
          flexDirection: 'row',
          borderColor:'#FFFFFF',
          borderWidth:2,
          flex: 0,}} 
          onPress={()=>{this.props.navigation.navigate('Sugerencia2') }}>
          
          <Text  style={{color:'#FFFFFF'}}> Zapatos   </Text>
          <Icon2 name="shoe-heel" color='#FFFFFF' size={30}></Icon2> 
    
          </TouchableOpacity>

          </View>

        <Text></Text>
        <Text></Text>
        
        <View style={{flexDirection:'row',  justifyContent: 'space-between', paddingHorizontal:20}} >
        
        <TouchableOpacity style={{
        backgroundColor:'#FF4500', 
        height:50, 
        width:200,
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        flexDirection: 'row',
        borderColor:'#FFFFFF',
        borderWidth:2,
        flex: 0,}} 
        onPress={()=>{this.props.navigation.navigate('Sugerencia2') }}>
        
        <Text  style={{color:'#FFFFFF'}}> Nike   </Text>
  
        </TouchableOpacity>

        <View style={{flex:0.9}}></View>
  
        <TouchableOpacity style={{
        backgroundColor:'#000000', 
        height:50, 
        width:200,
        alignItems: 'center',
        justifyContent:'center',
        padding: 10,
        flexDirection: 'row',
        borderColor:'#FFFFFF',
        borderWidth:2,
        flex: 0,}} 
        onPress={()=>{this.props.navigation.navigate('Sugerencia2') }}>
        
        <Text  style={{color:'#FFFFFF'}}> Zara   </Text> 
  
        </TouchableOpacity>

        </View>
        
      

      </View>
      </ScrollView>
    )
  }
}
