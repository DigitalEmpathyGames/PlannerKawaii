import React, {useContext} from "react";
import { Text, TouchableNativeFeedback, View,TouchableOpacity } from "react-native";
import estilos from "../estilos/Estilos";
import { Mug } from 'react-kawaii/lib/native/';
import { ContextoCreate } from "../context/context";
import useFechas from "../hooks/useFechas";


const TituloSeccion = () => {

    const {
        fechaString,
        setfechaString,
        setBuscarActxFecha
    } = useContext(ContextoCreate);

    let fechaArr = fechaString.split('-');

    const {
        mesNumToStr,
        diaToStr
    } = useFechas();

    const restablecerFecha = () => {
        let fechaHoy = new Date();
        setfechaString(fechaHoy.getFullYear().toString() + '-' + mesNumToStr(fechaHoy.getMonth()) +'-'+ diaToStr(fechaHoy.getDate()));  
        setBuscarActxFecha(true);
    }


    return(
        <>
            <TouchableNativeFeedback
                onPress={() => {restablecerFecha();}}
                background={TouchableNativeFeedback.Ripple('#FFFFFF', false, 50)}
            >

                <View style={estilos.contenedorTituloSeccion}>
                    <View style={estilos.tituloSeccionContenedor}>
                        <Text adjustsFontSizeToFit style={estilos.tituloSeccion}>
                            {
                                fechaArr[2] + '-' + fechaArr[1] + '-' + fechaArr[0]
                            }
                        </Text>
                    </View>
                </View>

            </TouchableNativeFeedback>
            

        </>
    );
}

export default TituloSeccion;