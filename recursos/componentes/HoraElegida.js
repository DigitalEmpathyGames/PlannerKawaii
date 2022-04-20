import React from "react";
import {View,Text} from "react-native";
import modal from '../estilos/Modal';
import { Planet } from 'react-kawaii/lib/native/';

const HoraElegida = ({hora}) => {
    let colorPlaneta='';
    if(hora.intervalo == 'AM'){
        colorPlaneta='#ECEDE8';
    }else{
        colorPlaneta='#FDF3B8';
    }

    return (
        <>
            <View style={modal.contenedorHorasElegidas}>
                <View style={[modal.flex2,modal.centrado]}>
                    <Text
                        style={modal.textoHora}
                        adjustsFontSizeToFit
                        numberOfLines={1}
                    >
                        {hora.hora} : {hora.minutos} {hora.intervalo}
                    </Text>
                </View>


                <View style={[modal.flex1,modal.centrado]}>
                    <Planet size={25} mood="happy" color={colorPlaneta} />
                </View>

                
            </View>
        </>
    );
}

export default HoraElegida;