import React, { useRef } from "react";
import { Animated, PanResponder, StyleSheet, Text, TouchableNativeFeedback, View } from "react-native";

const NumeroReloj = ({numero,x,y,numeroSize,color,setReloj}) => {

    let estiloUnico = {
        top:y,
        left:x,
        width:numeroSize,
        height:numeroSize,
        borderRadius:numeroSize/2,
        backgroundColor:color
    }

    return(

        <>
          <TouchableNativeFeedback
            onPress={() => {setReloj(numero)}}
            background={TouchableNativeFeedback.Ripple('#FFFFFFFF', false, numeroSize/2)}
          >
                <View style={[estilo.numero,estiloUnico]}>
                 <Text style={[estilo.textoNumero,{fontSize:numeroSize/2}]}>
                   {numero}
                 </Text>
                </View>  
          </TouchableNativeFeedback>
            
        </>
    );
}

export default NumeroReloj;

const estilo = StyleSheet.create({
    numero:{
      position:'absolute',
      borderWidth:5,
      borderColor:'#C48AEF',
      justifyContent: "center",
      alignItems: "center"
    },
    textoNumero:{
      fontWeight:'bold',
      fontSize:25,
      color:'black'
    }
  });