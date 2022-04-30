import React, {useContext,useEffect}from "react";
import { Text, View,TouchableNativeFeedback} from "react-native";
import { ContextoCreate } from "../context/context";
import navegador from "../estilos/Navegador";
import useFechas from "../hooks/useFechas";

const UltimoDia = ({dia,setModalVisible,setFechaActividad,mesNumStr,numeroDiaHoy,mesActual,yearActual}) =>{


    const {
        diaToStr
    } = useFechas();
    const {
        actividadesMes,
        setfechaString,
        setBuscarActxFecha,
        setActividadesHoy,
        setOcultarMes,
        fechaString  
    } = useContext(ContextoCreate);


    useEffect(
        ()=>{
            setOcultarMes(false);
        },
        [fechaString]
    );

    let backgroundColorDia = '';
    if(numeroDiaHoy == dia && mesActual == parseInt(mesNumStr)){
        backgroundColorDia = '#FDE0B4';
    }else{
        backgroundColorDia = '#FB9CDE';
    }

    const buscarActividades = ()=>{
        let fechaKey = fechaString.split('-')[0] + '-' + fechaString.split('-')[1] + '-' + diaToStr(dia);
        let actividadesHoy = actividadesMes.filter(
            (item) => {
                if(fechaKey === item[0]){
                    return item;
                }
            }
        );
        
        if(actividadesHoy.length > 0){
            setBuscarActxFecha(true);
        }
    
    }

    const agregarActividad= () => {
        setActividadesHoy([]);
        let yearActividad;
        if(mesActual > parseInt(mesNumStr)){
            yearActividad = (parseInt(yearActual) + 1).toString();
        }else{
            yearActividad = yearActual;
        }
        let fechaStr = yearActividad + '-' + mesNumStr + '-' + diaToStr(dia);
        setFechaActividad(fechaStr);
        setfechaString(fechaStr);
        buscarActividades();
        
        setModalVisible(true);
    }




    return(
        <>
            <View
                style={{
                    flex:1,
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <TouchableNativeFeedback
                    onPress={() => agregarActividad()}
                    background={TouchableNativeFeedback.Ripple('#FFFFFF', false, 40)}
                >

                    <View
                        style={{
                            height:'98%',
                            width:'98%',
                            borderWidth:5,
                            borderColor:'#B780E5',
                            borderRadius:10,
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:backgroundColorDia
                            //#FB9CDE
                        }}
                    >

                        {mostrarCantidad(dia,actividadesMes,fechaString,diaToStr,setOcultarMes)}

                        <View
                           style={{
                               position:'absolute',
                               top:-5,
                               right:2
                           }} 
                        >
                            <Text
                                adjustsFontSizeToFit
                                style={{fontWeight:'bold',fontSize:20,color:'black'}}
                            >
                               {dia}
                            </Text>
                        </View>

                    </View>
                </TouchableNativeFeedback>
            </View>
        </>
    );
}

export default UltimoDia;

const mostrarCantidad = (numDia,actividadesMes,fechaString,diaToStr,setOcultarMes) => {
    //construir fechabusqueda
    
    let fechaKey = fechaString.split('-')[0] + '-' + fechaString.split('-')[1] + '-' + diaToStr(numDia);
    let actividadesHoy = actividadesMes.filter(
        (item) => {
            if(fechaKey === item[0]){
                return item;
            }
        }
    );

    if(actividadesHoy.length > 0){
        let arrBD = actividadesHoy[0];
        let cantActividades = arrBD[1].length;
        if(cantActividades > 0){
            return(
                <>
                    <View
                        style={{
                            backgroundColor:'#BBE9F9',
                            width:30,
                            height:30,
                            borderWidth:3,
                            borderRadius:15,
                            borderColor:'#B780E5',
                            justifyContent: "center",
                            alignItems: "center",
                            top:5
                        }}
                    >
                        <Text adjustsFontSizeToFit style={navegador.textoTab}>
                            {cantActividades}
                        </Text>
                    </View>
                </>
            );
        }else{
            return(
                <>
                </>
            );
        }

    }else{
        return(<></>);
    }


}