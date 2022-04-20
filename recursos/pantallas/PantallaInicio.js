import React, {useContext,useState} from "react";
import { View,FlatList } from "react-native";
import TareaPrevia from "../componentes/TareaPrevia";
import TituloSeccion from "../componentes/TituloSeccion";
import { ContextoCreate } from "../context/context";
import estilos from "../estilos/Estilos";
import useModal from "../hooks/useModal";
import ModalAgregarActividad from "../modals/ModalAgregarActividad";
import ModalMostrarActividad from "../modals/ModalMostrarActividad";
import PantallaMensual from "./PantallaMensual";



const PantallaInicio = () => {


    const { 
        modalVisible,
        setModalVisible,
        relojVisible,
        setRelojVisible,
        setFechaActividad,
        fechaActividad
    } = useModal(); 

    const {
        actividadesHoy,
        setActividadesHoy,
    } = useContext(ContextoCreate);

    const [visibleActividad, setVisibleActividad] = useState(false);
    const [actividadMostrada,setActividadMostrada] = useState({});


    const renderActividadesHoy = (actividad) => {
        let color;
        if(actividad.intervalo == 'AM'){
            color= '#ECEDE8';
        }else{
            color= '#FDF3B8';
        }
        return(
        <TareaPrevia
            actividad = {actividad}
            color = {color}
            setVisibleActividad = {setVisibleActividad}
            setActividadMostrada = {setActividadMostrada}
        />
        )
    }   

    return(
        <>  
    

            <View style={estilos.contenedorPantalla}>

                <ModalAgregarActividad
                    modalVisible={modalVisible}
                    abrirCerrar = {setModalVisible}
                    mostrarReloj = {relojVisible}
                    abrirCerarReloj = {setRelojVisible}
                    setActividadesHoy = {setActividadesHoy}
                    actividadesHoy = {actividadesHoy}
                    fechaActividad = {fechaActividad}
                >
                </ModalAgregarActividad>

                <ModalMostrarActividad
                    visibleActividad = {visibleActividad}
                    setVisibleActividad = {setVisibleActividad}
                    actividadMostrada = {actividadMostrada}
                    tareasDelDia = {actividadesHoy}
                    fechaActividad = {fechaActividad}
                    setActividadesHoy = {setActividadesHoy}
                >
                </ModalMostrarActividad>

                <View
                    style={[estilos.border,{backgroundColor:'#FBE1FA'}]}
                >
                    <View
                        style={{
                            justifyContent: 'center', 
                            alignItems: 'center',
                            flexDirection:'column',
                            margin:20
                        }}
                    >

                    <TituloSeccion></TituloSeccion>
                    <View
                     style={[estilos.tareasDiarias,{}]}
                    >    
                    {/* <ScrollView style ={{backgroundColor:'gray',height:'100%',width:'100%'}}> */}


                        
                                    <FlatList
                                        data={actividadesHoy}
                                        renderItem={({item}) => {
                                               return renderActividadesHoy(item);
                                            }
                                        }
                                        horizontal = {true}
                                    />      

                    {/* </ScrollView> */}

                </View>

            </View>                
            </View>


                <View
                    style={[{
                        width:'100%',
                        height:400,
                        backgroundColor:'#FBE3FB',
                        top:10
                    }, estilos.border]}
                >
                    <PantallaMensual
                        setModalVisible = {setModalVisible}
                        setFechaActividad = {setFechaActividad}
                    ></PantallaMensual>
                </View>
            </View>
        </>
    );
}

export default PantallaInicio;