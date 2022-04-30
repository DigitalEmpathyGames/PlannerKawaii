import React, { useState, useRef } from "react";
import { View,Text,TouchableWithoutFeedback,Modal,Animated,PanResponder} from "react-native";
import relojStyle from "../estilos/Reloj";
import useReloj from "../hooks/useReloj";
import { Planet } from 'react-kawaii/lib/native/';
import useAngulos from "../hooks/useAngulos";

const {diametro} = useAngulos();

const ModalReloj = ({mostrarReloj,abrirCerarReloj,horasState,setHoras}) => {

  const {
    horasArr,
    minutosArr,
    horaPantallaChiquita,    
    minutosPantallaChiquita,
    amPm,
    reiniciarMinutos,
    setamPm,
    cerrarReloj
  } = useReloj();

  const [isEnabled, setIsEnabled] = useState(false);
  const [colorPlaneta,setColorPLaneta] = useState('#ECEDE8');
  
  const toggleSwitch = () => {
      setIsEnabled(previousState => !previousState);
      if(isEnabled){
        setamPm('AM');
        setColorPLaneta('#ECEDE8');
      }else{
        setamPm('PM');
        setColorPLaneta('#FDF3B8');
      }
    };


    let pan = useRef(new Animated.ValueXY()).current;

    Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 } } // Back to zero
      ).start();

    const deslizar = () => {
        let posicionItem = parseFloat(JSON.stringify(pan.y));
        if(posicionItem < -400.0){
          cerrarReloj(abrirCerarReloj,horasState,setHoras);
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



    return(
        <>
          <Modal
            animationType="fade"
            transparent={true}
            visible={mostrarReloj}
            onRequestClose={() => {
              cerrarReloj(abrirCerarReloj,horasState,setHoras);
            }}
          >

<Animated.View
                    style={{
                        transform: [{ translateX: pan.x }, { translateY: pan.y }],
                        height:'100%',width:'100%'
                    }}
                    {...panResponder.panHandlers}
                >

            <View style={relojStyle.contenedorVentana}>
              <View
                style = {relojStyle.contenedorModal}
              >
                <View
                  style={relojStyle.miniPantallaNumeros}
                >
                  <Text
                    style={relojStyle.textoMiniPantalla}
                  >
                    {horaPantallaChiquita}
                  </Text>
                  <Text
                    style={relojStyle.textoMiniPantalla}
                  >
                    :
                  </Text>
                  <Text
                    onPress={()=> {reiniciarMinutos()}}
                    style={relojStyle.textoMiniPantalla}
                  >
                    {minutosPantallaChiquita}
                  </Text>
                  <Text
                    style={relojStyle.textoMiniPantalla}
                  >
                     {amPm}
                  </Text>
                </View>
                <View
                  style={relojStyle.marcoRelojFuera}
                >
                  <View
                    style={relojStyle.marcoRelojMinutero}
                  >
                    <View style = {relojStyle.switchContent}>

                      <TouchableWithoutFeedback onPress={toggleSwitch}>
                          <View
                            style={{
                              position:'absolute'
                            }}

                          >
                            <Planet size={diametro*0.3} mood="happy" color={colorPlaneta} />
                          </View>
                      </TouchableWithoutFeedback>
                    </View>
                  </View>

                  <View style={relojStyle.relojCuadrantes}>
                    {horasArr}
                    {minutosArr}
                  </View>
                </View>
              </View>
            </View>
            </Animated.View>
          </Modal>
        </>
    );
}

export default ModalReloj;