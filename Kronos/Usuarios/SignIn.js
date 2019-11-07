import React, {Component, Fragment} from 'react';
import {View,Text, Button, ScrollView,TouchableOpacity,Switch,} from 'react-native';
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

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        first_name: {             //Solo deja ingresar palabras de 2 a 20 caracteres
          type: 'name',
          value: '',
        },
        last_name: {              //Solo deja ingresar palabras de 2 a 20 caracteres
          type: 'lastname',
          value: '',
        },
        age: {                    //Solo deja ingresar numeros mayores a 12 y menores a 150
          type: 'age',
          value: '',
        },
        email: {                  //Deja ingresar correos menos los de nosotros que aparecen que ya están
          type: 'email',            //registrados
          value: ''
        },                
        password: {               //Deja ingresar letras, números y ciertos signos de 6 a 15 caracteres
          type: 'password',
          value: '',
        },
      
        tos: {                      //Deja ingresar si es true 
          type: 'bool',
          value: false,
        },
      },
    }; //Todos los campos que tenemos junto con el tipo de dato que contienen

    this.onInputChange = validationService.onInputChange.bind(this);
    this.getFormValidation = validationService.getFormValidation.bind(this);
    this.setInputPosition = validationService.setInputPosition.bind(this);
    //Todas las funciones que se encuentran el la libreria react-native-form-helper

    this.submit = this.submit.bind(this);
    //Función submit para el boton aceptar
  
  }

  submit() {
    const firstInvalidCoordinate = this.getFormValidation();

    if (firstInvalidCoordinate == null) {
      this.props.navigation.navigate('Home')
    }
      return;
    }

    //Si no hay ningun campo invalido, entonces se navega al home, de lo contario se queda en la
    //página de singin
  

  renderError(id) {
    const {inputs} = this.state;
    if (inputs[id].errorLabel) {
      return <Text style={StyleSheet.error}>{inputs[id].errorLabel}</Text>;
    }
    return null;
  }

  //Si hay un error, devolver en un text el mensaje de error

  render() {
    const {inputs} = this.state;

    //Acá empiezan todos los campos con lo que debe leerse en estos, su respectivo error, estilo 
    // y las aplicaciones de las funciones de las librerias que permiten validar el texto ingresado
    return (
      <ScrollView style={StyleSheet.container}>
        <ScrollView >
        <FormInput
            label={'Nombre'}
            onChangeText={value => {
              this.onInputChange({id: 'first_name', value});
            }}
            errorLabel={inputs.first_name.errorLabel}
            touched={inputs.first_name.touched}
            onLayout={({nativeEvent}) => {
              this.setInputPosition({
                ids: ['first_name'],
                value: nativeEvent.layout.y,
              });
            }
          }
          />

        <FormInput
            label={'Apellido'}
            onChangeText={value => {
              this.onInputChange({id: 'last_name', value});
            }}
            errorLabel={inputs.last_name.errorLabel}
            touched={inputs.last_name.touched}
            onLayout={({nativeEvent}) => {
              this.setInputPosition({
                ids: ['last_name'],
                value: nativeEvent.layout.y,
              });
            }
          }
          />

        <FormInput
            label={'Email'}
            onChangeText={value => {
              this.onInputChange({id: 'email', value});
            }}
            errorLabel={inputs.email.errorLabel}
            touched={inputs.email.touched}
            onLayout={({nativeEvent}) => {
              this.setInputPosition({
                ids: ['email'],
                value: nativeEvent.layout.y,
              });
            }
          }
          />  

          <FormInput
            label={'Edad'}
            onChangeText={value => {
              this.onInputChange({id: 'age', value});
            }}
            errorLabel={inputs.age.errorLabel}
            touched={inputs.age.touched}
            onLayout={({nativeEvent}) => {
              this.setInputPosition({
                ids: ['age'],
                value: nativeEvent.layout.y,
              });
            }
          }
          />

            <FormInput
            label={'Contraseña'}
            onChangeText={value => {
              this.onInputChange({id: 'password', value});
            }}
            errorLabel={inputs.password.errorLabel}
            touched={inputs.password.touched}
            secureTextEntry={true}
            onLayout={({nativeEvent}) => {
              this.setInputPosition({
                ids: ['password'],
                value: nativeEvent.layout.y,
              });
            }
          }
          />

          <View
            onLayout={({nativeEvent}) => {
              this.setInputPosition({
                ids: ['tos'],
                value: nativeEvent.layout.y,
              });
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 20}}>
              <Switch value={this.state.inputs.tos.value}
                onValueChange={value => { this.onInputChange({id: 'tos', value});}}
              />
              <Text style={{paddingLeft: 10}}>Aceptar Términos y Condiciones</Text>
            </View>
            {this.renderError('tos')}
          
           
          </View>
        </ScrollView>
        <View style={{alignItems:'center'}}>
        <Text> </Text>
        <TouchableOpacity style={StyleSheet.button} onPress={this.submit }>
          <Text style={StyleSheet.textButton}> Aceptar </Text>
        </TouchableOpacity>
        
        <Text> </Text>

        <TouchableOpacity style={StyleSheet.button} onPress={()=>{this.props.navigation.navigate('LogIn') }}>
          <Text style={StyleSheet.textButton}> Cancelar </Text>
        </TouchableOpacity>
      </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>

      </ScrollView>

    );
  }
}
