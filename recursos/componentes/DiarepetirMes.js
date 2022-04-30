import React, {useRef,useState}from "react";
import { Text, TextInput, TouchableNativeFeedback, View} from "react-native";
import modal from "../estilos/Modal";
import useFechas from "../hooks/useFechas";

const DiarepetirMes = ({dia,setMes,mesState}) =>{
    const [componentSize,setComponentSize] = useState(10.0);
    const [marcado,setMarcado] = useState(false);
    const [color,setColor] = useState('#D1FFA400');
    
    const {
        diaToStr
    }= useFechas();

    let diaStr = diaToStr(dia);

    const agregaQuitaDia = (permitir) => {
        let arrDias = mesState.map(
            (item) => {
                return item;
            }
        );

        if(permitir){
            arrDias[dia - 1] = true;
        }else{
            arrDias[dia - 1] = false;
        }
        setMes(arrDias);
    }

    const agregarDia = () => {
        //agregarSin mas
        let diasMarcados =  mesState.map(
            (item)=>{
                return item;
            }
        );
        diasMarcados.push(diaStr);
        setMes(diasMarcados);
    }

    const quitarDia = () => {
        let diasGuardar = [];
        let diasMarcados =  mesState.map(
            (item)=>{
                return item;
            }
        );
        if(diasMarcados.length == 1 && diasMarcados.indexOf(diaStr) == 0  ){
            diasGuardar = [];
        }else if(diasMarcados.length > 1 && diasMarcados.indexOf(diaStr) == 0){
            diasGuardar = diasMarcados.join().replace(diaStr + ',','').split(',');
        }else if(diasMarcados.length > 1 && diasMarcados.indexOf(diaStr) == diasMarcados - 1){
            diasGuardar = diasMarcados.join().replace(',' + diaStr ,'').split(',');
        }else if(diasMarcados.length == 0){
            diasGuardar = [];
        }else{
            diasGuardar = diasMarcados.join().replace(diaStr + ',','').split(',');
        }
        setMes(diasGuardar);


    }

    const marcarDia = () => {
        if(!marcado){
            //encendido
            setColor('#D1F6B1');
            agregarDia();
        }else{
            //apagado
            setColor('#D1FFA400');
            quitarDia();
        }
        setMarcado(!marcado);
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
                    onPress={() => {marcarDia()}}
                >
                    <View
                        style={{
                            height:'98%',
                            width:'98%',
                            borderWidth:5,
                            borderColor:'white',
                            borderRadius:10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:color
                        }}

                        nLayout={(event) => {
                            var {x, y, width, height} = event.nativeEvent.layout;
                            setComponentSize(((width+height)/2));
                          }}

                    >
                        <Text
                            style={{fontWeight:'bold',fontSize:40}}
                            adjustsFontSizeToFit
                        >
                           {dia}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </>
    );
}

export default DiarepetirMes;