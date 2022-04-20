import React from "react";
import { StyleSheet } from "react-native";

const modal = StyleSheet.create({
    botonMasHoras:{
        backgroundColor:'#F5ABD7',
        height:40,
        width:40,
        borderWidth:5,
        borderColor:'#C691DE',
        borderRadius:100,
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },
    colorGray:{
        color:'gray'
    },
    contenedorDias:{
        backgroundColor:'#D1FFA4',
        width:'100%',
        height:'8%',
        flexDirection:'row',
        borderColor:'white',
        borderWidth:5,
        borderRadius:10,
        bottom:5
    },
    contenedorDiasMes:{
        backgroundColor:'#F8D7E8',
        width:'100%',
        height:'33%',
        flexDirection:'column',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        bottom:5,
        top:2
        
    },
    contenedorHoras:{
        width:'100%',
        flexDirection:'row',
        justifyContent: "center",
        alignItems: "center"
    },
    contenedorHorasElegidas:{
        flexDirection:'row',
        width:130,
        height:40,
        backgroundColor:'#F3B1CD',
        marginHorizontal:5,
        marginVertical:3,
        borderWidth:5,
        borderColor:'#BE87ED',
        borderRadius:20,
        justifyContent: "center",
        alignItems: "center"
    },
    contenedorFondoHoras:{
        position:'absolute',
        width:'100%',
        height:'100%',
        justifyContent: "center",
        alignItems: "center"
    },
    flex9:{
        flex:9 
    },
    signoMas:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        bottom:1
    },
    textImputActividad:{
        height: '13%',
        width:'100%',
        backgroundColor:'#C5AAEB',
        borderWidth:5,
        borderColor:'#BE87ED',
        borderRadius:10,
        textAlign:'center',
        marginBottom:5,
        color:'black'
    },
    textImputDetalle:{
        height: '30%',
        width:'100%',
        backgroundColor:'#FBE1FA',
        borderWidth:5,
        borderColor:'#BE87ED',
        borderRadius:10,
        textAlign:'center',
        marginBottom:5,
        color:'black'
    },
    textoHora:{
        // fontFamily:'alarm clock',
        fontSize:30,
        fontWeight:'bold',
        color:'black'
    },
    titulo:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    tituloCont:{
        backgroundColor:'#D8AEF9',
        height:40,
        width:200,
        borderWidth:5,
        borderColor:'#C48AEF',
        borderRadius:10,
        alignItems: 'center',
        position:'absolute',
        top:-25
    },
    centrado:{
        justifyContent: "center",
        alignItems: "center"
    },
    flex1:{
        flex:1
    },
    flex2:{
        flex:2
    },
    flex3:{
        flex:3
    },
    semanaDiasMes:{
        flex:1,

        flexDirection:'row'
    },
    botonBorrarActividad:{
        width:'100%',height:70,backgroundColor:'#FB96E2',
        top:40,
        borderWidth:5,
        borderColor:'#C48AEF',
        borderRadius:10,
        justifyContent: "center",
        alignItems: "center"

    }

    
});

export default modal;