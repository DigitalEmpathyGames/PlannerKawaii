import React, {useRef,useState}from "react";
import { Text, TextInput, TouchableNativeFeedback, View} from "react-native";

import modal from "../estilos/Modal";
import BottonDia from "./BottonDia";
const Dias = ({setDias,dias}) =>{
    
    return(
        <>
            <BottonDia
                dia={'Lu'}
                setDia = {setDias}
                diasState = {dias}
            />
            <BottonDia
                dia={'Ma'}
                setDia = {setDias}
                diasState = {dias}
            />
            <BottonDia
                dia={'Mi'}
                setDia = {setDias}
                diasState = {dias}
            />
            <BottonDia
                dia={'Ju'}
                setDia = {setDias}
                diasState = {dias}
            />
            <BottonDia
                dia={'Vi'}
                setDia = {setDias}
                diasState = {dias}
            />
            <BottonDia
                dia={'Sa'}
                setDia = {setDias}
                diasState = {dias}
            />
            <BottonDia
                dia={'Do'}
                setDia = {setDias}
                diasState = {dias}
            />
        </>
    );
}
export default Dias;