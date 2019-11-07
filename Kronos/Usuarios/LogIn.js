import React, { Component } from "react";
import {Alert, TextInput, Text, View, TouchableOpacity, ScrollView, Image} from "react-native";
import StyleSheet from '../style';



 
 export default class LogIn extends Component { 

  constructor(props){
    super(props); 
    global.email= '',
    global.password= ''
    this.state ={ 
      email:'',
      password:'',
      estadoingresar:''

    }
    this.verificar = this.verificar.bind(this);
  }
 

verificar (){ 
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
  let reg2= /^[a-zA-Z0-9]*$/

  if(this.state.email.length<30 ){
    if(this.state.password.length<16 &&this.state.password.length>5 ){
      if(reg.test(this.state.email)==true ){
        if(reg2.test(this.state.password)==true ){
          if(this.state.email=="anamariauribee1@gmail.com"
          || this.state.email=="cristinaragnoe@gmail.com" 
          || this.state.email=="mateoarteagagiraldo@gmail.com" ){
             if(this.state.email=="anamariauribee1@gmail.com" && this.state.password=="123456" 
             || this.state.email=="cristinaragnoe@gmail.com" && this.state.password=="654321" 
             || this.state.email=="mateoarteagagiraldo@gmail.com" && this.state.password=="000000"  ){
          

  this.setState({email:''});
  global.email= this.state.email;
  this.setState({password:''});
  global.password= this.state.password;
  this.props.navigation.navigate('Home');
 

} else{
  this.setState({estadoingresar:'Email no coincide con contraseña.'});
} 

} else{
  this.setState({estadoingresar:'Email no registrado.'});
}
} else {
  this.setState({estadoingresar:'Contraseña no es válida.'});
} 
      } else {
        this.setState({estadoingresar:'Email no es válido.'});
      } 

} else{
  this.setState({estadoingresar: 'Contraseña no tiene el número requerido de caracteres.'});
}
} else{
  this.setState({estadoingresar:'Email supera el número máximo de caracteres.'});
}


}

  render() {
      return(
        
      <ScrollView style={StyleSheet.container}> 
     
        <View >
          <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>
        <Image source={require('../Images/logos.png')}  style={{height: 90,
        width: 90}}/>
   </View>
        <Text></Text>
        <View >
       <TextInput
               autoCorrect={ false } 
      
               value={String(this.state.email)}
               returnKeyLabel = {"next"}
              onChangeText={(text) => this.setState({email: text})}
              placeholder="Email"
            />
            
            <Text></Text>
            <TextInput
                autoCorrect={ false } 
              
                placeholder="Contraseña"
                returnKeyLabel = {"next"}
                value={String(this.state.password)}
                onChangeText={(text) => this.setState({password:text})}
               secureTextEntry={true}
              
            />
              <Text></Text>
            <Text></Text>
            
            <Text style={StyleSheet.error} >{this.state.estadoingresar} </Text>
            </View>
          
            
           
<Text></Text>
<View style={{alignItems:'center'}}>

        

             <TouchableOpacity  onPress={()=>{this.props.navigation.navigate('SignIn') }}>
          <Text style={StyleSheet.textButton1}> Registrar Usuario </Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('RecuperarContrasena') }}>
          <Text style={StyleSheet.textButton1}> Recuperar Contraseña </Text>
        </TouchableOpacity>

        <Text></Text>

        <TouchableOpacity style={StyleSheet.button} onPress={() => {this.verificar()}} >
               <Text style={StyleSheet.textButton} >  Entrar </Text>
             </TouchableOpacity>

       
             <Text></Text>


         
        </View>


             </View>

             </ScrollView>
    );
        }
      }
      
