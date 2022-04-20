import React, {useEffect,useState}from "react";
import { Text, TextInput, TouchableNativeFeedback, View,TouchableWithoutFeedback} from "react-native";
import modal from "../estilos/Modal";

const BottonDia = ({dia,setDia,diasState}) =>{
    const [componentSize,setComponentSize] = useState(10.0);
    const [marcado,setMarcado] = useState(false);
    const [color,setColor] = useState('#D1FFA4');

    useEffect(() => {
        encenderDia();
      }, []);


    //encender Dia si esta seleccionado
    const encenderDia = () => {
        switch(dia){
            case 'Lu':
                if(diasState.lunes){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            case 'Ma':
                if(diasState.martes){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            case 'Mi':
                if(diasState.miercoles){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            case 'Ju':
                if(diasState.jueves){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            case 'Vi':
                if(diasState.viernes){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            case 'Sa':
                if(diasState.sabado){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            case 'Do':
                if(diasState.domingo){
                    setColor('#BAD5F0');
                    setMarcado(true);
                }
                break;
            default:
                break;
        }
    }


    const agregaQuitaDia = (marcado) => {
        switch(dia){
            case 'Lu':
                setDia({...diasState,lunes:marcado})
                break;
            case 'Ma':
                setDia({...diasState,martes:marcado})
                break;
            case 'Mi':
                setDia({...diasState,miercoles:marcado})
                break;
            case 'Ju':
                setDia({...diasState,jueves:marcado})
                break;
            case 'Vi':
                setDia({...diasState,viernes:marcado})
                break;
            case 'Sa':
                setDia({...diasState,sabado:marcado})
                break;
            case 'Do':
                setDia({...diasState,domingo:marcado})
                break;
            default:
                break;
        }
    }

    const marcarDia = () => {
        if(!marcado){
            //encendido
            setColor('#BAD5F0');
            agregaQuitaDia(true);
        }else{
            //apagado
            setColor('#D1FFA4');
            agregaQuitaDia(false);
        }
        setMarcado(!marcado);
    } 
    return(
    <>
            <View
                style={[{
                    flex:1
                },modal.centrado]}
            >
                    <TouchableWithoutFeedback
                    onPress={() => {marcarDia()}}
                >
                    <View
                        style={{
                            backgroundColor:color,
                            width:'90%',
                            height:'90%',
                            borderRadius:componentSize,
                            borderWidth:componentSize/8,
                            borderColor:'white',
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                        onLayout={(event) => {
                            var {x, y, width, height} = event.nativeEvent.layout;
                            setComponentSize(((width+height)/2));
                          }}
                    >
                        <Text
                            style={{fontWeight:'bold',fontSize:componentSize/2}}
                            adjustsFontSizeToFit
                        >
                            {dia}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            
    </>
    );
}
export default BottonDia;