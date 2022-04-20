import React ,{useRef} from "react";
import {Animated,PanResponder} from "react-native";
const useAnimacion = () => {
    let pan = useRef(new Animated.ValueXY()).current;
    
    const deslizarY = () => {
        let posicionItem = parseFloat(JSON.stringify(pan.y));
        // console.log(posicionItem);
        if(posicionItem < -400.0){
            cerrarModalAgregarActividad();
        }
    }

    const moverA0 = (pan) => {
        Animated.spring(
            pan, // Auto-multiplexed
            { toValue: { x: 0, y: 0 } } // Back to zero
        ).start();
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

    
    return {
        pan,
        panResponder,
        deslizarY,
        moverA0
    }
}

export default useAnimacion;