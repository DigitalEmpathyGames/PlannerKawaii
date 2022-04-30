import React, { useState,useContext } from "react";
import useDB from "../bd/useDB";
import { ContextoCreate } from "../context/context";
import useAlarm from "./useAlarm";
import useFechas from "./useFechas";

const useModal = () =>{
    const [modalVisible,setModalVisible] = useState(false);
    const [relojVisible,setRelojVisible] = useState(false);

    const {
        setfechaString,
        setBuscarActxFecha,
        setBuscarActxMes
    } = useContext(ContextoCreate);


    const {
        fechaParaAlarma,
        guardarAlarma
    } = useAlarm();

    const {
        setItem,
        getItem
    } = useDB();

    const {
        fechaAhora
    } = useFechas();

    const dias = {
        lunes:false,
        martes:false,
        miercoles:false,
        jueves:false,
        viernes:false,
        sabado:false,
        domingo:false
    }

    const [horasActividad,setHorasActividad] = useState([]);
    const [diasState,setDiasState] = useState(dias);
    const [mesState,setMesState] = useState([]);
    const [actividad,setActividad] = useState('');
    const [descripcion,setDescripcion] = useState('');
    const [fechaActividad,setFechaActividad] = useState(fechaAhora().split('T')[0]);
    
    const agregarActividades = async (fechaActividad,horasActividad,actividad,descripcion,setActividadesHoy) => {

        let actividadesAgregadas = horasActividad.map(
            (item) =>{
                return{
                    actividad: actividad,
                    descripcion: descripcion,
                    hora: item.hora,
                    minutos: item.minutos.join(''),
                    intervalo:item.intervalo
                }
            }
        );
        //guarda en bd las actividades ahora todas juntas sobreescribiendo lo que estaba
        //solo para actividades validas (si existe)
        if(actividadesAgregadas.length > 0){


            //realizar esto solo si hay hora que agregar
            //no gacer nada si la alarma es menor

            //busca actividades para la fecha seleccionada
            let actividadesPrevias = await getItem(fechaActividad);
            //agrega la nueva actividad al registro de la fecha elegida




            // obtenerdatos de la nueva alarma
            let alarma = actividadesAgregadas[0];
            //obtener fecha para alarma
            let fechaAlarma = fechaParaAlarma(alarma,fechaActividad);
            //guaradar alarma y obtener ID
            let nuevaFecha = fechaAhora();
            if((new Date(fechaAlarma.toString()) > new Date(nuevaFecha.toString())) && (new Date(fechaAlarma.toString()) != new Date(nuevaFecha.toString()))){
                let alarmaId = await guardarAlarma(fechaAlarma,alarma.actividad,alarma.descripcion).then(
                    (resultado) => {
                        return resultado;
                    }
                );
    
                actividadesPrevias.push({...actividadesAgregadas[0],id:alarmaId});
                await setItem(fechaActividad,actividadesPrevias,setActividadesHoy);
            } else{
                console.log("No guardo alarmas viejas");
            }
            setBuscarActxFecha(true);
            setBuscarActxMes(true);
        }
        setfechaString(fechaActividad);

    }





    return{
        modalVisible,
        setModalVisible,
        relojVisible,
        setRelojVisible,
        horasActividad,
        setHorasActividad,
        diasState,
        setDiasState,
        mesState,
        setMesState,
        actividad,
        setActividad,
        descripcion,
        setDescripcion,
        setFechaActividad,
        fechaActividad,
        agregarActividades
    }
}

export default useModal;