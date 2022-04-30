import React from "react";
import {View} from "react-native";
import { SvgCss } from 'react-native-svg';
import useSvgImages from "../bd/useSvgImages";
const {
    pusheen
} = useSvgImages();

const PantallaCarga = () => {
    return(
        <>
            <View
                style={{width:'100%',height:'100%',position:'absolute',backgroundColor:'#FBE3FB'}}
            >
                <SvgCss xml={pusheen} 
                    height="100%" width="100%"
                />
            </View>
        </>
    );
}

export default PantallaCarga;