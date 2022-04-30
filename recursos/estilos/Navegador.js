import React from "react";
import { StyleSheet } from "react-native";
import useAngulos from "../hooks/useAngulos";


const navegador = StyleSheet.create({
    tabSemana:{
        flex:1,
        backgroundColor:'#EE98EE',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        height:50,
        justifyContent: "center",
        alignItems: "center",
        marginRight:5
    },
    textoTab:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    }

    ,
    contenedorMesPantalla:{
        flex:1,
    },
    contenedorMes:{
        width:'100%',
        height:'100%',
        justifyContent: "center",
        alignItems: "center",
    },
    mesVistado:{
        backgroundColor:'#D9ADFA',
        justifyContent: 'center', 
        alignItems: 'center',
        height:40,
        borderColor:'#B780E5',
        borderWidth:5,
        borderRadius:10
        }

});

export default navegador;