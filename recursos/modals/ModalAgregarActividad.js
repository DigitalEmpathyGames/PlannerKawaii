import React ,{useRef} from "react";
import { Modal, Text, TextInput, TouchableNativeFeedback, View ,FlatList,Animated,PanResponder} from "react-native";
import HoraElegida from "../componentes/HoraElegida";
import estilos from "../estilos/Estilos";
import modal from "../estilos/Modal";
import useModal from "../hooks/useModal";
import ModalReloj from "./ModalReloj";

const ModalAgregarActividad = ({modalVisible,abrirCerrar,mostrarReloj,abrirCerarReloj,setActividadesHoy,fechaActividad}) => {

    
    const {
        horasActividad,
        setHorasActividad,
        setMesState,
        actividad,
        setActividad,
        descripcion,
        setDescripcion,
        agregarActividades
    } = useModal();



    const cerrarModalAgregarActividad = () =>{
        abrirCerrar(false);
        agregarActividades(fechaActividad,horasActividad,actividad,descripcion,setActividadesHoy);
        setMesState([]);
        setHorasActividad([]);
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



    return (
        <>
            <ModalReloj
                mostrarReloj = {mostrarReloj}
                abrirCerarReloj = {abrirCerarReloj}
                setHoras = {setHorasActividad}
                horasState = {horasActividad}
            />



                


            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    cerrarModalAgregarActividad();
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
                                    Agrega una actividad
                                </Text>
                            </View>
                            <TextInput
                                placeholder="¿Qué harás?"
                                style= {modal.textImputActividad}
                                onChangeText={setActividad}
                                value={actividad}
                            >
                            </TextInput>
                            <TextInput
                                multiline
                                placeholder="Agrega detalles"
                                style= {modal.textImputDetalle}
                                onChangeText={setDescripcion}
                                value={descripcion}
                            >
                            </TextInput> 
                            {/* fondo de horas */}
                            <View style={modal.contenedorHoras}>
                                <View
                                    style={modal.contenedorFondoHoras}
                                >
                                    <Text style={modal.colorGray}>
                                        Agrega la hora
                                    </Text>
                                </View>

                                {/* boton + y lista de horas */}
                                <TouchableNativeFeedback
                                    onPress={() => {abrirCerarReloj(true)}}
                                    background={TouchableNativeFeedback.Ripple('#FFFFFFFF', false, 20)}
                                >
                                    <View style={modal.botonMasHoras}>
                                        <Text
                                            style={modal.signoMas}
                                        >
                                            +
                                        </Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <View style={modal.flex9}>
                                    <FlatList
                                        data={horasActividad}
                                        renderItem={({item}) => 
                                            <HoraElegida
                                                hora = {item}
                                            />
                                        }
                                        horizontal = {true}
                                    />
                                </View>  

                            </View>
                        </View>  
                    </View>
                    
                </View>
                </Animated.View>
            </Modal>                

        </>
    );
}

export default ModalAgregarActividad;
