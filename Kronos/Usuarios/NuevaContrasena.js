import React, {Component, Fragment} from 'react';
import {View,Text, Button, ScrollView,TouchableOpacity,Switch, TextInput, Alert, Image} from 'react-native';
import  RNFormHelpers  from 'react-native-form-helpers';
import FormInput from './FormInput'
import { validationDictionary } from "./dictionary.js"; // Archivo donde se incluyen
                                                            // todas las condiciones del Form
import StyleSheet from '../style' //Archivo donde se modifican todas las cosas estéticas, 
                                  // si se está en computador mac se redireige a style.ios.js,
                                  // si está en computados anroid se redirige a styñe.android.js

export const validationService = RNFormHelpers({
  dictionary: validationDictionary
}); //Instrucciones de la libreria

export default class NuevaContrasena extends Component {
  constructor(props){
    super(props); 
    this.state ={ 
      password:'',
      estadoingresar:''
   
    }
    this.verificar = this.verificar.bind(this);
  }
 

verificar (){ 
  let reg = /^[a-zA-Z0-9]*$/

  
    if(this.state.password.length<16 &&this.state.password.length>5 ){
      if(reg.test(this.state.password )){
         

  this.setState({password:''});
  this.props.navigation.navigate('Home');

} else{
  this.setState({estadoingresar:'Contraseña no es válida.'});
}
}else{
  this.setState({estadoingresar: 'Contraseña no tiene el número requerido de caracteres.'});
}

}
  render() {
    const {inputs} = this.state;

    //Acá empiezan todos los campos con lo que debe leerse en estos, su respectivo error, estilo 
    // y las aplicaciones de las funciones de las librerias que permiten validar el texto ingresado
    return (
      <ScrollView style={StyleSheet.container}>
           <View style={{ flex: 1, justifyContent:'center', alignItems:'center' }}>
        <Image source={require('../Images/logos.png')}  style={{height: 90,
        width: 90}}/>
        <Text style={StyleSheet.textoNormal}>Ingrese su nueva contraseña:
        </Text>
        <Text></Text>
        <TextInput
            autoCorrect={ false }
            value={String(this.state.password)}
            returnKeyLabel = {"next"}
            onChangeText={(text) => this.setState({password: text})}
            placeholder="Contraseña"
            secureTextEntry={true}
            />

<Text></Text>
            <Text></Text>
            
            <Text style={StyleSheet.error} >{this.state.estadoingresar} </Text>
            </View>

            <View style={{alignItems:'center'}}>
           
<Text></Text>
             <TouchableOpacity  onPress={() => {
            this.verificar();
          }} style={StyleSheet.button}>
               <Text style={StyleSheet.textButton}>  Aceptar </Text>
             </TouchableOpacity>

             <Text></Text>

             <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('LogIn') }}>
          <Text style={StyleSheet.textButton}> Cancelar </Text>
        </TouchableOpacity>
        
        <Text> </Text>
        </View>


        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
         
      </ScrollView>

    );
  }
}