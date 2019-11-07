import React, { Component, Fragment } from 'react';
import { View, Text, Button, ScrollView, TouchableOpacity, Switch, TextInput, Alert, Image } from 'react-native';
import RNFormHelpers from 'react-native-form-helpers';
import FormInput from '../Usuarios/FormInput'
import { validationDictionary } from "../Usuarios/dictionary.js"; // Archivo donde se incluyen
// todas las condiciones del Form
import StyleSheet from '../style' //Archivo donde se modifican todas las cosas estéticas, 
// si se está en computador mac se redireige a style.ios.js,
// si está en computados anroid se redirige a styñe.android.js

export const validationService = RNFormHelpers({
    dictionary: validationDictionary
}); //Instrucciones de la libreria

export default class NuevaContrasena extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passwordActual: '',
            passwordNueva: '',
            estadoingresar: ''

        }
        this.verificar = this.verificar.bind(this);
    }


    verificar() {
        let reg = /^[a-zA-Z0-9]*$/


        if (this.state.passwordActual.length < 16 && this.state.passwordActual.length > 5 &&
            this.state.passwordNueva.length < 16 && this.state.passwordNueva.length > 5) {
            if (reg.test(this.state.passwordActual) && reg.test(this.state.passwordNueva)) {
                if (this.state.passwordActual==global.password) {

                this.setState({ passwordActual: '' });
                this.setState({ passwordNueva: '' });
                
                this.props.navigation.navigate('Ajustes');
            } else {
                this.setState({ estadoingresar: 'Contraseña actual incorrecta.' });
            }
            } else {
                this.setState({ estadoingresar: 'Contraseñas no son válidas.' });
            }
        } else {
            this.setState({ estadoingresar: 'Contraseñas no tienen el número requerido de caracteres.' });
        }

    }
    render() {
        const { inputs } = this.state;

        //Acá empiezan todos los campos con lo que debe leerse en estos, su respectivo error, estilo 
        // y las aplicaciones de las funciones de las librerias que permiten validar el texto ingresado
        return (
            <ScrollView style={StyleSheet.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <TextInput
                        autoCorrect={false}
                        value={String(this.state.passwordActual)}
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({ passwordActual: text })}
                        placeholder="Contraseña actual"
                        secureTextEntry={true}
                    />

                    <TextInput
                        autoCorrect={false}
                        value={String(this.state.passwordNueva)}
                        returnKeyLabel={"next"}
                        onChangeText={(text) => this.setState({ passwordNueva: text })}
                        placeholder="Contraseña nueva"
                        secureTextEntry={true}
                    />
                    
                    <Text></Text>

                    <Text style={StyleSheet.error} >{this.state.estadoingresar} </Text>
                </View>

                <View style={{ alignItems: 'center' }}>

                    <Text></Text>
                    <TouchableOpacity onPress={() => {
                        this.verificar();
                    }} style={StyleSheet.button}>
                        <Text style={StyleSheet.textButton}>  Aceptar </Text>
                    </TouchableOpacity>

                    <Text></Text>

   

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