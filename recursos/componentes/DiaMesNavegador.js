import React, {useState,useContext}from "react";
import { Text, View,TouchableNativeFeedback} from "react-native";
import { ContextoCreate } from "../context/context";
import navegador from "../estilos/Navegador";
import useFechas from "../hooks/useFechas";

const DiaMesNavegador = ({dia,setModalVisible,setFechaActividad,mesNumStr,numeroDiaHoy}) =>{

    const {
        diaToStr
    } = useFechas();

    const {
        actividadesMes,
        fechaString,
        setfechaString,
        setBuscarActxFecha
    } = useContext(ContextoCreate);

    let backgroundColorDia = '';

    if(numeroDiaHoy == dia){
        backgroundColorDia = '#FDE0B4';
    }else{
        backgroundColorDia = '#FB9CDE';
    }

    

    const agregarActividad= () => {
        let yearActividad;
        if((new Date().getMonth() + 1) > parseInt(mesNumStr)){
            yearActividad = (new Date().getFullYear() + 1).toString();
        }else{
            yearActividad = (new Date().getFullYear()).toString();
        }
        let fechaStr = yearActividad + '-' + mesNumStr + '-' + diaToStr(dia);
        setFechaActividad(fechaStr);
        setfechaString(fechaStr);
        setBuscarActxFecha(true);
        setModalVisible(true);
    }



    return(
        <>
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <TouchableNativeFeedback
                    onPress={() => {agregarActividad();}}
                    background={TouchableNativeFeedback.Ripple('#FFFFFF', false, 40)}
                >
                    <View
                        style={{
                            height:'98%',
                            width:'98%',
                            borderWidth:5,
                            borderColor:'#B780E5',
                            borderRadius:10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:backgroundColorDia
                            //#FB9CDE
                        }}
                    >

                        {mostrarCantidad(dia,actividadesMes,fechaString,diaToStr)}

                        <View
                           style={{
                               position:'absolute',
                               top:-5,
                               right:2
                           }} 
                        >
                            <Text
                                adjustsFontSizeToFit
                                style={{fontWeight:'bold',fontSize:20,color:'black'}}
                            >
                               {dia}
                            </Text>
                        </View>

                    </View>
                </TouchableNativeFeedback>
            </View>
        </>
    );
}

export default DiaMesNavegador;

const mostrarCantidad = (numDia,actividadesMes,fechaString,diaToStr) => {
    //construir fechabusqueda
    
    let fechaKey = fechaString.split('-')[0] + '-' + fechaString.split('-')[1] + '-' + diaToStr(numDia);
    let actividadesHoy = actividadesMes.filter(
        (item) => {
            if(fechaKey === item[0]){
                return item;
            }
        }
    );
    
    if(actividadesHoy.length > 0){
        let arrBD = actividadesHoy[0];
        let cantActividades = arrBD[1].length;
        if(cantActividades > 0){
            return(
                <>
                    <View
                        style={{
                            backgroundColor:'#BBE9F9',
                            width:30,
                            height:30,
                            borderWidth:3,
                            borderRadius:15,
                            borderColor:'#B780E5',
                            justifyContent: "center",
                            alignItems: "center",
                            top:5
                        }}
                    >
                        <Text adjustsFontSizeToFit style={navegador.textoTab}>
                            {cantActividades}
                        </Text>
                    </View>
                </>
            );
        }else{
            return(
                <>
                </>
            );
        }

    }else{
        return(<></>);
    }


}