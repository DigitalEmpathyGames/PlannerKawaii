import React from "react";
import { View } from "react-native";
import estilos from "../estilos/Estilos";
import TareaPrevia from "./TareaPrevia";

const ListaTareas = () => {

    return(
        <>
            <View style={estilos.listaTareas}>
                <TareaPrevia></TareaPrevia>
            </View>
        </>
    );

}

export default ListaTareas;