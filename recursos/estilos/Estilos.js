import React from "react";
import { StyleSheet } from "react-native";

const borderColor='#B780E5'


const estilos = StyleSheet.create({
    border:{
        borderWidth:5,
        borderColor:borderColor,
        borderRadius:10
    },
    botonActividadHoy:{
        backgroundColor:'#E9B1F2',
        height:60,
        width:60,
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth:5,
        borderColor:borderColor,
        borderRadius:100,
        left:10
    },
    //C
    tareasDiarias:{
        justifyContent: "center",
        alignItems: "center",
        height:130,
    },
    centrarEnTodoEspacio:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    contenedorDeElementos:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin:5
    },
    contenedorModalActividad:{
        marginVertical:25,
        width:'80%',
        height:'50%',
        backgroundColor:'#FFC6E6',
        borderWidth:5,
        borderColor:borderColor,
        borderRadius:10
    },
    contenedorPantalla:{
        margin:5
    },
    contenedorTituloSeccion:{
        flexDirection:'row'
    },
    fondoApp:{
        flex:1,
        backgroundColor:'#FFC6E6'
    },
    listaTareas:{
        height:140,
        width:'100%',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor:'tomato'
    },
    tareaPreviaContenido:{
        backgroundColor:'#F8A7EA',
        height:90,
        width:200,
        borderWidth:5,
        borderColor:borderColor,
        borderRadius:10,
        alignItems: 'center',
        top:20,
        marginLeft:10,
        marginBottom:20
        
    },
    tareaPreviaContenidoTexto:{
        fontSize:16,
        color:'black',
        top:20,
        textAlign:'center'
    },
    tareaPreviaHora:{
        backgroundColor:'#C0B4F4',
        position:'absolute',
        borderWidth:5,
        borderColor:borderColor,
        borderRadius:10,
        top:-20,
        width:120,
        height:40,
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:'row'
    },
    diaSemanaNombre:{
        backgroundColor:'#BAD5F0',
        position:'absolute',
        borderWidth:5,
        borderColor:borderColor,
        borderRadius:10,
        top:-20,
        width:120,
        height:40,
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection:'row'
    },
    tareaPreviaTextoHora:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    },
    tituloSeccion:{
        fontSize:20,
        color:'black'
    },
    tituloSeccionContenedor:{
        backgroundColor:'#FCE4CA',
        width:200,
        borderWidth:5,
        height:60,
        borderColor:borderColor,
        borderRadius:10,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    contenedorDiaSemana:{
        width:250, 
        height:'95%',
        backgroundColor:'#B0F2C2',
        borderWidth:5,
        borderColor:'white',
        borderRadius:10,
        alignItems: 'center',
        top:20,
        marginRight:10
        
    }
    
});

export default estilos;