import React,{useState,useRef,useContext} from "react";
import { Text, View, PanResponder, Animated, TouchableNativeFeedback } from "react-native";
import estilos from "../estilos/Estilos";
import { Planet } from 'react-kawaii/lib/native/';
import useDB from "../bd/useDB";
import useAlarm from "../hooks/useAlarm";
import { ContextoCreate } from "../context/context";

const TareaPrevia = ({actividad,color,setVisibleActividad,setActividadMostrada}) => {

    const pan = useRef(new Animated.ValueXY()).current;

    const {
        setItem
    } = useDB();
    const {
        borrarAlarma
    } = useAlarm();

    const {
        setBuscarActxMes
    } = useContext(ContextoCreate);

    const deslizar = async () =>{
        let posicionItem = parseFloat(JSON.stringify(pan.y));
        if(posicionItem < -90.0){
            //de la lista de actividades quitamos la que borramos
            let actividadesToBd = tareasDelDia.filter(
                (item) => {
                    if(actividad.id != item.id){
                        return item;
                    }
                }
            );
            //actualizamos la bd, el objetod e tareas mostradas y borramos la alarma
            await setItem(fechaActividad,actividadesToBd,setActividadesHoy);
            await borrarAlarma(actividad.id);
            //actualizamos actividades mensuales del context
            setBuscarActxMes(true);
        }

      }

      const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dy: pan.y // x,y are Animated.Value
            
          }
        ],{
          listener: () => deslizar(),
          useNativeDriver:false
        }),
        onPanResponderRelease: () => {
          Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 } } // Back to zero
            
          ).start();
        },
    });



    return(
        <>
                {/* <Animated.View
                    {...panResponder.panHandlers}
                    style={pan.getLayout()}
                > */}
                
                <TouchableNativeFeedback
                                    onPress={() => {setVisibleActividad(true);setActividadMostrada(actividad);}}
                                    background={TouchableNativeFeedback.Ripple('#FFFFFF', false, 100)}
                >

                
            <View style={estilos.tareaPreviaContenido}>
                <Text adjustsFontSizeToFit style={estilos.tareaPreviaContenidoTexto}>
                    {actividad.actividad}
                </Text>
                <View style={estilos.tareaPreviaHora}>
                    <Text style={estilos.tareaPreviaTextoHora}>
                        {actividad.hora}:{actividad.minutos}
                    </Text>
                    <View
                        style={{
                            width:30,
                            height:30,
                            backgroundColor:'#C5C6C8',
                            left:5,
                            borderRadius:15,
                            justifyContent: 'center', 
                            alignItems: 'center'
                            
                        }}
                    >
                        <Planet size={25} mood="happy" color={color} />
                    </View>
                </View>
            </View>
            </TouchableNativeFeedback>
            {/* </Animated.View> */}
        </>
    );

}

export default TareaPrevia;