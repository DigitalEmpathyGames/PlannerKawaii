import React from "react";
import {View,Text,StyleSheet} from "react-native";
import modal from "../estilos/Modal";
import DiaMesNavegador from "./DiaMesNavegador";
import useFechas from "../hooks/useFechas";
import UltimoDia from "./UltimoDia";

const MesNavegador = ({numeroMes,setModalVisible,setFechaActividad,yearMostrado,numeroDiaHoy,mesActual,yearActual}) => {
    const {semanaPorMes,mesNumToStr,diasMes,biciesto} = useFechas();
    let mesNumStr = mesNumToStr(numeroMes);
    let dias = semanaPorMes(mesNumStr,yearMostrado);
    const diasMOstrar = () => {
        let diasextra = <></>;
        switch(diasMes[numeroMes]){
            case 28:
                if(biciesto){
                    diasextra = <>
                    <UltimoDia
                         dia={29}
                         setModalVisible = {setModalVisible}
                         setFechaActividad = {setFechaActividad}
                         mesNumStr = {mesNumStr}
                         numeroDiaHoy = {numeroDiaHoy}
                         mesActual = {mesActual}
                         yearActual = {yearActual}
                    />
                    <View style={{flex:6}} />
                </>
                }else{
                    diasextra = <></>;
                }
                
                break;
            case 30:
                diasextra = <>
                    <DiaMesNavegador
                         dia={29}
                         setModalVisible = {setModalVisible}
                         setFechaActividad = {setFechaActividad}
                         mesNumStr = {mesNumStr}
                         numeroDiaHoy = {numeroDiaHoy}
                         mesActual = {mesActual}
                         yearActual = {yearActual}
                    />
                    <UltimoDia
                        dia={30}
                        setModalVisible = {setModalVisible}
                        setFechaActividad = {setFechaActividad}
                        mesNumStr = {mesNumStr}
                        numeroDiaHoy = {numeroDiaHoy}
                        mesActual = {mesActual}
                        yearActual = {yearActual}
                    />
                    <View style={{flex:5}} />
                </>
                break;

            case 31:
                diasextra = 
                <>
                    <DiaMesNavegador
                         dia={29}
                         setModalVisible = {setModalVisible}
                         setFechaActividad = {setFechaActividad}
                         mesNumStr = {mesNumStr}
                         numeroDiaHoy = {numeroDiaHoy}
                         mesActual = {mesActual}
                         yearActual = {yearActual}
                    />
                    <DiaMesNavegador
                        dia={30}
                        setModalVisible = {setModalVisible}
                        setFechaActividad = {setFechaActividad}
                        mesNumStr = {mesNumStr}
                        numeroDiaHoy = {numeroDiaHoy}
                        mesActual = {mesActual}
                        yearActual = {yearActual}
                    />
                    <UltimoDia
                        dia={31}
                        setModalVisible = {setModalVisible}
                        setFechaActividad = {setFechaActividad}
                        mesNumStr = {mesNumStr}
                        numeroDiaHoy = {numeroDiaHoy}
                        mesActual = {mesActual}
                        yearActual = {yearActual}
                    />
                    <View style={{flex:4}} />
                </>
                break;
            default:
                break;
        }


        return diasextra;
    }

    let dias293031 = diasMOstrar();

    return(
        <>

            <View
                style={estilosMesNavegador.contenedorNombres}
            >
                <DiaNombre nombre={dias[0]}/>
                <DiaNombre nombre={dias[1]}/>
                <DiaNombre nombre={dias[2]}/>
                <DiaNombre nombre={dias[3]}/>
                <DiaNombre nombre={dias[4]}/>
                <DiaNombre nombre={dias[5]}/>
                <DiaNombre nombre={dias[6]}/>
            </View>

            <View
                style={modal.semanaDiasMes}
            >
                <DiaMesNavegador
                    dia={1}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                    

                <DiaMesNavegador
                    dia={2}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={3}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={4}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={5}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={6}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={7}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiaMesNavegador
                    dia={8}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />

                <DiaMesNavegador
                    dia={9}
                    setFechaActividad = {setFechaActividad}
                    setModalVisible = {setModalVisible}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={10}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={11}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={12}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={13}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={14}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiaMesNavegador
                    dia={15}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />

                <DiaMesNavegador
                    dia={16}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={17}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={18}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={19}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={20}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={21}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiaMesNavegador
                    dia={22}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />

                <DiaMesNavegador
                    dia={23}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={24}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={25}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={26}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={27}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
                <DiaMesNavegador
                    dia={28}
                    setModalVisible = {setModalVisible}
                    setFechaActividad = {setFechaActividad}
                    mesNumStr = {mesNumStr}
                    numeroDiaHoy = {numeroDiaHoy}
                    mesActual = {mesActual}
                    yearActual = {yearActual}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                {dias293031}
            </View>
        </>
    );
}
export default MesNavegador;

const DiaNombre = ({nombre}) => {
    return(
        <>
                <View
                    style={{
                        flex:1,
                    }}
                >
                    <View
                        style={estilosMesNavegador.estiloDia}
                    >
                        <Text style={estilosMesNavegador.texto}

                        >
                            {nombre}
                        </Text>
                    </View>
                </View>
        </>
    );
}

const estilosMesNavegador = StyleSheet.create({
    contenedorNombres:{
        width:'100%',
        height:'10%',
        flexDirection:'row'
    },
    estiloDia:{
        width:'100%',
        height:'100%',
        backgroundColor:'#B4CCFA',
        borderRadius:10,
        justifyContent: 'center', 
        alignItems: 'center',
        borderWidth:5,
        borderColor:'#B780E5'
    },
    texto:{
        color:'black'
    }
});