import React from 'react';
import { StyleSheet, Text, View , Image} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {BackAndroid} from 'react-native'

import {createAppContainer} from 'react-navigation'; 
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Kronos/Home.js';
import LogInScreen from './Kronos/Usuarios/LogIn.js';
import SignInScreen from './Kronos/Usuarios/SignIn.js';
import RecuperarContrasenaScreen from './Kronos/Usuarios/RecuperarContrasena.js';
import EntrarCodigoScreen from './Kronos/Usuarios/EntrarCodigo.js';
import NuevaContrasenaScreen from './Kronos/Usuarios/NuevaContrasena.js';
import Sugerencia1Screen from './Kronos/Sugerencias/Sugerencia1.js';
import Sugerencia2Screen from './Kronos/Sugerencias/Sugerencia2.js';
import Sugerencia3Screen from './Kronos/Sugerencias/Sugerencia3.js';
import ResultadosScreen from './Kronos/Resultados.js';
import Sugerencia4Screen from './Kronos/Sugerencias/Sugerencia4.js';
import FiltrosScreen from './Kronos/Filtros.js';
import AjustesScreen from './Kronos/Ajustes/Ajustes.js';
import FavoritosScreen from './Kronos/Favoritos/Favoritos.js';
import UsersScreen from './Kronos/Users/Usuario.js';
import EditarInformacionScreen from './Kronos/Users/EditarInformacion.js';
import CambiarContrasenaScreen from './Kronos/Ajustes/CambiarContrasena.js';

const TabScreen = createMaterialTopTabNavigator(
  {
    Home: {
      screen: HomeScreen, 
      navigationOptions: {
        tabBarLabel: ({ tintColor }) => (
          <Icon name="home" color='#000000' size={25}></Icon> 
        )
      },
   
   },
   Favoritos: {
    screen: FavoritosScreen, 
    navigationOptions: {
      tabBarLabel: ({ tintColor }) => (
        <Icon name="list-ul" color='#000000' size={25}></Icon> 
      )
    },
 
 },
 Users: {
  screen: UsersScreen, 
  navigationOptions: {
    tabBarLabel: ({ tintColor }) => (
      <Icon name="user-circle" color='#000000' size={25}></Icon> 
    )
  },

},
Ajustes: {
  screen: AjustesScreen, 
  navigationOptions: {
    tabBarLabel: ({ tintColor }) => (
      <Icon2 name="md-settings" color='#000000' size={25}></Icon2> 
    )
  },

},
},

  {
    tabBarPosition: 'top',
    swipeEnabled: true,
   
    showIcon: false,
 
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#FFFFFF',
      },
     
    
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);



export default class App extends React.Component {


 
  render() {
    
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator({

  Home: {
    screen: TabScreen,
    navigationOptions:  {
      
      header: null,
      
  },
},
  LogIn: {
    screen: LogInScreen,
    navigationOptions:  {
      title: 'LogIn',
      header: null,
  }
  },
  CambiarContrasena: {
    screen: CambiarContrasenaScreen,
    navigationOptions:  {
      title: 'Cambiar Contraseña        ',
     
      header: null,
  }
  },
  
  EditarInformacion: {
    screen: EditarInformacionScreen,
    navigationOptions:  {
      title: 'Editar Información        ',
     
      header: null,
  },
},
  Sugerencia1: {
    screen: Sugerencia1Screen, 
    navigationOptions:  {
      title: 'Sugerencia 1',
      header: null,
  } 
  },
  Sugerencia2: {
    screen: Sugerencia2Screen, 
    navigationOptions:  {
      title: 'Sugerencia 2',
      header: null,
  } 
  },Sugerencia3: {
    screen: Sugerencia3Screen, 
    navigationOptions:  {
      title: 'Sugerencia 3',
      header: null,
  } 
  },

  Sugerencia4: {
  screen: Sugerencia4Screen, 
  navigationOptions:  {
    title: 'Sugerencia 4',
    header: null,
} 
},
  SignIn: {
    screen: SignInScreen,
    navigationOptions:  {
      title: 'Registrar Usuario',
      header: null,
  }
  },
  RecuperarContrasena: {
    screen: RecuperarContrasenaScreen,
    navigationOptions:  {
      title: 'Recuperar Contraseña',
      header: null,
      
  },
},
  Filtros: {
    screen: FiltrosScreen,
    navigationOptions:  {
      title: 'Filtros',
      header: null,
  }
},
  EntrarCodigo: {
    screen: EntrarCodigoScreen,
    navigationOptions:  {
      title: 'Código',
      header: null,
  }
  },

  Resultados: {
    screen: ResultadosScreen,
    navigationOptions:  {
      title: 'Resultados',
      header: null,
  }
  },

  NuevaContrasena: {
    screen: NuevaContrasenaScreen,
    navigationOptions:  {
      title: 'Establecer Nueva Contraseña',
      header: null,
  }
  }, 
}, {
  initialRouteName: "LogIn"
});
const AppContainer = createAppContainer(AppNavigator);
