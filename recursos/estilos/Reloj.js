import React from "react";
import { StyleSheet } from "react-native";
import useAngulos from "../hooks/useAngulos";

const diametro = useAngulos().diametro;
const numeroSize = useAngulos().numeroSize;


const relojStyle = StyleSheet.create({
    miniPantallaNumeros:{
        width:250,
        height:80,
        backgroundColor:'#F9E6FC',
        borderWidth:5,
        borderColor:'#C48AEF',
        borderRadius:10,
        bottom:20,
        justifyContent: "center",
        alignItems: "center",
        alignContent:'space-between',
        flexDirection:'row'
      },
      contenedorVentana:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      contenedorModal:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'#E0BCF5',
        borderWidth:5,
        borderColor:'#C48AEF',
        borderRadius:10,
        bottom:-20,
        paddingTop:30,
        paddingBottom:10,
        paddingHorizontal:6
      },
      relojCuadrantes:{
        width:diametro,
        height:diametro,
    
        flexDirection:'row'
    
      },
      marcoRelojFuera:{
        backgroundColor:'#FAB9E5',
        width:diametro + (numeroSize *1.5),
        height:diametro + (numeroSize *1.5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius:(diametro + (numeroSize *1.5))/2,
        borderWidth:5,
        borderColor:'#C48AEF',
      },
      marcoRelojMinutero:{
        position:'absolute',
        backgroundColor:'#F4D2F7',
        width:diametro - (numeroSize *1.5),
        height:diametro - (numeroSize *1.5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius:(diametro - (numeroSize *1.5))/2,
        borderWidth:5,
        borderColor:'#C48AEF',
      },
      textoMiniPantalla:{
        fontFamily:'alarm clock',
        fontSize:40,
        color:'black'
      },
      switchContent:{
          width:diametro*0.4,
          height:diametro*0.4,
          backgroundColor:'#F995E4',
          justifyContent: "center",
          alignItems: "center",
          borderWidth:5,
          borderColor:'#C48AEF',
          borderRadius: (diametro*0.4)/2
      }

});

export default relojStyle;