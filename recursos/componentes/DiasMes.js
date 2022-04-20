import React, {useRef,useState}from "react";
import { Text, TextInput, TouchableNativeFeedback, View} from "react-native";
import modal from "../estilos/Modal";
import DiarepetirMes from "./DiarepetirMes";

const DiasMes = ({setMes,estadoMes}) => {
    return(
        <>
            <View
                style={modal.semanaDiasMes}
            >
                <DiarepetirMes
                    dia={1}
                    setMes = {setMes} mesState = {estadoMes}
                />
                    

                <DiarepetirMes
                    dia={2}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={3}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={4}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={5}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={6}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={7}
                    setMes = {setMes} mesState = {estadoMes}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiarepetirMes
                    dia={8}
                    setMes = {setMes} mesState = {estadoMes}
                />

                <DiarepetirMes
                    dia={9}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={10}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={11}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={12}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={13}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={14}
                    setMes = {setMes} mesState = {estadoMes}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiarepetirMes
                    dia={15}
                    setMes = {setMes} mesState = {estadoMes}
                />

                <DiarepetirMes
                    dia={16}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={17}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={18}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={19}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={20}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={21}
                    setMes = {setMes} mesState = {estadoMes}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiarepetirMes
                    dia={22}
                    setMes = {setMes} mesState = {estadoMes}
                />

                <DiarepetirMes
                    dia={23}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={24}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={25}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={26}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={27}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={28}
                    setMes = {setMes} mesState = {estadoMes}
                />
            </View>
            <View
                style={modal.semanaDiasMes}
            >
                <DiarepetirMes
                    dia={29}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={30}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <DiarepetirMes
                    dia={31}
                    setMes = {setMes} mesState = {estadoMes}
                />
                <View style={{flex:4}} />
            </View>
        </>
    );
}
export default DiasMes;