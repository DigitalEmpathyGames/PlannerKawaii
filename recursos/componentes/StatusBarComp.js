import React from "react";
import { StatusBar } from "react-native";
import estilos from "../estilos/Estilos";

const StatusBarComp = () => {
    return(
        <StatusBar
        animated={true}
        backgroundColor={estilos.fondoApp.backgroundColor}
        barStyle="dark-content"
        showHideTransition="none"
        hidden={false} />
    );
}

export default StatusBarComp;

