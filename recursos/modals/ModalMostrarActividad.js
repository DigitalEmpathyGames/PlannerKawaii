import React,{useRef,useContext} from "react";
import { Modal, Text, TouchableNativeFeedback, View ,Animated,PanResponder} from "react-native";
import useDB from "../bd/useDB";
import { ContextoCreate } from "../context/context";
import estilos from "../estilos/Estilos";
import modal from "../estilos/Modal";
import useAlarm from "../hooks/useAlarm";

const ModalMostrarActividad = ({visibleActividad,setVisibleActividad,actividadMostrada,tareasDelDia,fechaActividad,setActividadesHoy}) => {

    const {
        setItem
    } = useDB();
    const {
        borrarAlarma
    } = useAlarm();

    const {
        setBuscarActxMes
    } = useContext(ContextoCreate);

    const cerrarModalAgregarActividad = () =>{
        setVisibleActividad(false);
    }

    let pan = useRef(new Animated.ValueXY()).current;

    Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 } } // Back to zero
      ).start();

    const deslizar = () => {
        let posicionItem = parseFloat(JSON.stringify(pan.y));
        if(posicionItem < -400.0){
            cerrarModalAgregarActividad();
        }
    }


    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
        //   dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
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


    const borrarActividad = async () => {
        let actividadesToBd = tareasDelDia.filter(
            (item) => {
                if(actividadMostrada.id != item.id){
                    return item;
                }
            }
        );
        //actualizamos la bd, el objetod e tareas mostradas y borramos la alarma
        await setItem(fechaActividad,actividadesToBd,setActividadesHoy);
        
        await borrarAlarma(actividadMostrada.id);
        //actualizamos actividades mensuales del context
        setBuscarActxMes(true);
        setVisibleActividad(false);
    }


    return(
        <>
            <Modal
                animationType="fade"
                transparent={true}
                visible={visibleActividad}
                onRequestClose={() => {
                    setVisibleActividad(false);
                }}
            >
            
                <Animated.View
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: pan.y }],
                        height:'100%',width:'100%'
                    }}
                    {...panResponder.panHandlers}
                >

                <View style={estilos.centrarEnTodoEspacio} >

                    <View style={estilos.contenedorModalActividad}>
                        <View style={[estilos.contenedorDeElementos]}>
                             <View style={modal.tituloCont}>
                                <Text adjustsFontSizeToFit 
                                    numberOfLines={1}
                                    style={modal.titulo}
                                >
                                    {actividadMostrada.hora}:{actividadMostrada.minutos} {' '} {actividadMostrada.intervalo}
                                </Text>
                            </View>
                            <Text
                                style= {modal.textImputActividad}
                            >
                                {actividadMostrada.actividad}
                            </Text>
                            <Text
                                style= {modal.textImputDetalle}
                            >
                                {actividadMostrada.descripcion}
                            </Text> 
                            <TouchableNativeFeedback
                                    onPress={() => {borrarActividad();}}
                                    background={TouchableNativeFeedback.Ripple('#FFFFFF', false, 150)}
                            >
                                <View
                                    style={modal.botonBorrarActividad}
                                >
                                    <Text
                                        style={{fontSize:35,color:'black'}}
                                    >
                                        BORRAR
                                    </Text>
                                </View>
                            </TouchableNativeFeedback>
                        </View>  
                    </View>




                    
                </View>
                </Animated.View>
            </Modal>  
        </>
    );
}

export default ModalMostrarActividad;