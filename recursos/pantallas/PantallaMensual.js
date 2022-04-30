import React ,{useContext} from "react";
import {View,Text,NativeModules} from "react-native";
import MesNavegador from "../componentes/MesNavegador";
import NombreMesesNavegador from "../componentes/NombreMesesNavegador";
import navegador from "../estilos/Navegador";
import useFechas from "../hooks/useFechas";
import PantallaCarga from "../componentes/PantallaCarga";
import { ContextoCreate } from "../context/context";

const PantallaMensual = ({setModalVisible,setFechaActividad}) => {

    const { ObtenerFecha } = NativeModules;
    const {ocultarMes} = useContext(ContextoCreate);

    const {
        mesMostrado,
        setMesMostrado,
        mesesCom,
        yearMostrado,
        setYearMostrado
    } = useFechas();
    let date = ObtenerFecha.obtenerFechaActual();
    const numeroDiaHoy = date.split(' ')[0].split('-')[2];
    let mesActual = date.split(' ')[0].split('-')[1];


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
                            mesActual = {mesActual}
                            yearActual = {date.split(' ')[0].split('-')[0]}
                        />

                            
                        {ocultarMes && <PantallaCarga/>}
                    </View>
                    
                </View>
            </View>  
        </>
    );
}

export default PantallaMensual;