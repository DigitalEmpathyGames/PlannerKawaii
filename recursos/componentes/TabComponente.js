import React from "react";
import { Text, View,TouchableNativeFeedback } from "react-native";
import { Mug } from 'react-kawaii/lib/native/';
import navegador from "../estilos/Navegador";

const TabComponente = ({ state, descriptors, navigation, position }) => {

    

    return(
        <>
            <View
                style = {{
                    flexDirection:'row'
                }} 
            >
                <TouchableNativeFeedback
                  onPress={() => {navigation.navigate({ name: 'PantallaSemana', merge: true });}}
                  background={TouchableNativeFeedback.Ripple('#FFFFFFFF', false, 65)}
                >
                    <View
                        style={navegador.tabSemana}
                    >
                        <Text adjustsFontSizeToFit style={navegador.textoTab}>
                            Semana
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                  onPress={() => {navigation.navigate({ name: 'PantallaMensual', merge: true });}}
                  background={TouchableNativeFeedback.Ripple('#FFFFFFFF', false, 65)}
                >
                    <View
                        style={navegador.tabSemana}
                    >
                        <Text adjustsFontSizeToFit style={navegador.textoTab}>
                            Mes
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View>


            

        </>
    );
}

export default TabComponente;