import React from "react";
import { SvgUri,SvgXml,SvgCss } from 'react-native-svg';
import {View,StyleSheet } from 'react-native';
import useSvgImages from "../bd/useSvgImages";



const PantallaPruebas = () => {

const {homero,kawaii,pulpo} = useSvgImages();


    return(
        <>
            <View
                style={[StyleSheet.absoluteFill,{height:100,width:300}]}
            >
                <SvgCss xml={pulpo} 
                    height="100%" width="100%"
                />
            </View>
            



        </>
    );
}

export default PantallaPruebas;