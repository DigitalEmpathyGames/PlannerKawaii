import React, {useContext} from "react";
import {View,Text,StyleSheet,TouchableNativeFeedback,FlatList} from "react-native";
import useFechas from "../hooks/useFechas";
import { ContextoCreate } from "../context/context";

const NombreMesesNavegador = ({setMesMostrado,setYearMostrado}) => {

    const {mesesActual,meses} = useFechas();

    const {
        setBuscarActxMes,
        dataPormes,
        setfechaString,
        setBuscarActxFecha
    } = useContext(ContextoCreate);

    return(
        <>
            <View
                style={estilos.contenedorNombres}
            >
                <FlatList
                    data={mesesActual}
                    renderItem={({item,index}) => 
                        <MesComponent
                            nombre = {mesesActual[index]}
                            numeroMes = {meses.indexOf(mesesActual[index])}
                            setMesMostrado = {setMesMostrado}
                            setYearMostrado = {setYearMostrado}
                            setBuscarActxMes = {setBuscarActxMes}
                            setfechaString = {setfechaString}
                            setBuscarActxFecha = {setBuscarActxFecha}
                        />
                    }
                    horizontal = {true}
                />
            </View>
        </>
    );
};
export default NombreMesesNavegador;

const MesComponent = ({nombre,numeroMes,setMesMostrado,setYearMostrado,setBuscarActxMes,setfechaString,setBuscarActxFecha}) =>{

    const yearActividadSet = () => {
        let yearActividad;
        if((new Date().getMonth()) > numeroMes){
            yearActividad = (new Date().getFullYear() + 1).toString();
        }else{
            yearActividad = (new Date().getFullYear()).toString();
        }
        return yearActividad;
    }

    const cambiarMes = () => {
        setMesMostrado(numeroMes);
        setYearMostrado(yearActividadSet());
        actualizarMesContext();

    }

    const mesNumToStr = (mes) => {
        let mesAux = mes + 1;
        let mesStr = ''
        if(mesAux < 10){
          mesStr = '0' + mesAux.toString();
        }else{
          mesStr = mesAux.toString();
        }
        return mesStr;
      }

    const actualizarMesContext = () =>{
        let fechaString = yearActividadSet() + '-' + mesNumToStr(numeroMes) + '-01';
        setfechaString(fechaString);
        setBuscarActxMes(true);
        setBuscarActxFecha(true);

    }

    return(
        <>
            <TouchableNativeFeedback
                onPress={() => {cambiarMes();}}
                background={TouchableNativeFeedback.Ripple('#FFFFFF', false, 30)}
            >
                <View
                    style={{
                        flex:1,
                    }}
                >
                    <View
                        style={estilos.estiloMes}
                    >
                        <Text style={estilos.texto}
                            adjustsFontSizeToFit
                        >
                            {nombre}
                        </Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        </>
    );
}

const estilos = StyleSheet.create({
    contenedorNombres:{
        width:'100%',
        height:'10%',
        flexDirection:'row'
    },
    estiloMes:{
        width:60,
        height:'100%',
        backgroundColor:'#FDE0B4',
        borderRadius:50,
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth:5,
        borderColor:'#B780E5'
    },
    texto:{
        color:'black',
        fontSize:15
    }
});

