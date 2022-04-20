import React, { useState } from "react";
import { View,Text,TouchableWithoutFeedback,Modal,FlatList } from "react-native";
import estilos from "../estilos/Estilos";
import TareaPrevia from "./TareaPrevia";


const DiaSemana = ({dia}) => {



    return(
        <>
            <View
              style={estilos.contenedorDiaSemana}  
            >
                <View
                    style={estilos.diaSemanaNombre}
                >
                    <Text
                        style={estilos.tareaPreviaTextoHora}
                    >
                        {dia}
                    </Text>
                </View>
                <View
                    style={{top:25,height:'92%'}}
                >
                <FlatList
                    data={[1,2,3,4,5,6,7,8]}
                    renderItem={({item}) => 
                        <TareaPrevia
                            actividad = "activ"
                            hora = "10"
                            minutos = "54"
                            color = "#C5C6C8"
                        />
                    }
                    horizontal = {false}
                    />  
                </View>


            </View>
        </>
    );
}

export default DiaSemana;