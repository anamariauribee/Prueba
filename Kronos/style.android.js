import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding:10,
         margin:10
      },

      split: {
        flexDirection: 'row',
      },
    
      error: {
        position: 'absolute',
        bottom: 0,
        color: 'red',
        fontSize: 13,

      },

      fields:{
        height: 40,
        width:200,
        borderColor: 'gray',
        borderWidth: 1
      },

      textoNormal:{
        fontSize: 19, 
        padding:10,
         lineHeight: 30,
        },

    button: {
        alignItems: 'center',
        padding: 10,
        fontSize: 15,
        flexDirection: 'row',
        backgroundColor:'#565656',
        height: 40,
        width:200,
        justifyContent: 'center', 
        flex: 0,
        color:'#FFFFFF',
    },

    textButton1:{
      textDecorationLine: 'underline'
    },

    textButton:{
      color:'#FFFFFF',
    },

    sugerencias:{
      alignItems: 'center',
      padding: 20,
      fontSize:30,
      flexDirection: 'row',
      borderColor:'#565656',
      color:'#000000',
      borderWidth:2,
      height: 50,
      justifyContent: 'space-around',
      flex: 0,
    }

 
 
}); 