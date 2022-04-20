import React, { createContext,useState } from 'react';
import useDB from '../bd/useDB';
import useFechas from '../hooks/useFechas';


export const ContextoCreate = createContext();

export const Context = ({children}) =>{
    const [buscarActxFecha,setBuscarActxFecha] = useState(true);
    const [buscarActxMes,setBuscarActxMes] = useState(true);
    const {
        getItem,
        multiGet
    }= useDB();
    const {
        fechaString,
        setfechaString,
        keysMesBase
    } = useFechas();

    const [actividadesHoy,setActividadesHoy] = useState([]);
    const [actividadesMes,setActividadesMes] = useState([]);


    const dataInicial = async () =>{
        if(buscarActxFecha){
            let datainicial = await getItem(fechaString);
            setActividadesHoy(datainicial);
            setBuscarActxFecha(false);
        }

    }

    const dataPormes = async () =>{
        if(buscarActxMes){
            //obtenerLas claves del mes
            let clavesStr = new String(keysMesBase);
            clavesStr = clavesStr.replace(/year/g, fechaString.split('-')[0]);
            clavesStr = clavesStr.replace(/mes/g, fechaString.split('-')[1]);
            //multiget
            let clavesArr = clavesStr.split(',');

            //encontrar
            let actividadesMesBD = await multiGet(clavesArr);
            setActividadesMes(actividadesMesBD);
            setBuscarActxMes(false);
        }

    }

    dataInicial();
    dataPormes();

    return(
        <ContextoCreate.Provider
            value={{
                actividadesHoy,
                setActividadesHoy,
                setfechaString,
                fechaString,
                actividadesMes,
                setActividadesMes,
                setBuscarActxFecha,
                setBuscarActxMes,
                dataPormes
            }}
        >
            {children}
        </ContextoCreate.Provider>
    );
}