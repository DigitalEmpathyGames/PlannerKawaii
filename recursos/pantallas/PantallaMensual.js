import React ,{useState} from "react";
import {View,Text} from "react-native";
import MesNavegador from "../componentes/MesNavegador";
import NombreMesesNavegador from "../componentes/NombreMesesNavegador";
import navegador from "../estilos/Navegador";
import useFechas from "../hooks/useFechas";


const PantallaMensual = ({setModalVisible,setFechaActividad}) => {

    const {
        mesMostrado,
        setMesMostrado,
        mesesCom,
        yearMostrado,
        setYearMostrado
    } = useFechas();

    const numeroDiaHoy = new Date().getDate();

    return(
        <>
            <View
                style={navegador.contenedorMesPantalla}
            >
                <View
                    style={navegador.contenedorMes}
                >
                    <View
                        style={{
                            width:'90%',
                            height:'90%'
                        }}
                    >
                        <View
                            style={navegador.mesVistado}
                        >
                            <Text style={{color:'black'}}>
                                {mesesCom[mesMostrado]}
                               - {yearMostrado}
                            </Text>
                        </View>
                        <NombreMesesNavegador
                            setMesMostrado = {setMesMostrado}
                            setYearMostrado = {setYearMostrado}
                        />
                        <MesNavegador
                            numeroMes ={mesMostrado}
                            setModalVisible = {setModalVisible}
                            setFechaActividad = {setFechaActividad}
                            yearMostrado = {yearMostrado}
                            numeroDiaHoy = {numeroDiaHoy}
                        />
                    </View>
                    
                </View>
            </View>  
        </>
    );
}

export default PantallaMensual;