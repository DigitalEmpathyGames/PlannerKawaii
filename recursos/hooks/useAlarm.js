import React from "react";
import ReactNativeAN from 'react-native-alarm-notification';
import useFechas from "./useFechas";

const useAlarm = () => {

    //alarm
    const {hora24From12,mesNumToStr,diaToStrN} = useFechas();

    const fechaParaAlarma = (alarma,diaAlarma) => {
        let hora24 = hora24From12(alarma.hora,alarma.intervalo);
        let alarmaStrDate = diaAlarma + 'T' + hora24 + ':' + alarma.minutos + ':00Z';
        return new Date(alarmaStrDate);
    }

    const fechaFormatoAlarma = (fecha) => {
        // esto  2022-04-20T17:55:00.000Z
        // const fireDate = ReactNativeAN.parseDate(fecha);
        //  a   esto     20-04-2022 13:55:0

        let retorno = diaToStrN(fecha.getUTCDate()) + '-' + mesNumToStr(fecha.getMonth()) + '-' + fecha.getFullYear() + ' ' + fecha.getUTCHours() + ':' + fecha.getMinutes() + ':0';
        return retorno;
    }

    const guardarAlarma = async (fecha,titulo,detalle) => {
        // 2022-04-20T17:55:00.000Z
        // const fireDate = ReactNativeAN.parseDate(fecha);
        // 20-04-2022 13:55:0
        const fireDate = fechaFormatoAlarma(fecha);
        const notificacion = {
            title: titulo || 'Actividad',
            message: detalle || 'Sin descripcion',
            channel: "my_channel_id",
            small_icon: "ic_launcher",
            data: { foo: "bar" },
            has_button: true
              
        };

        console.log("firedate");
        console.log(fireDate);
        const alarm = await ReactNativeAN.scheduleAlarm({ ...notificacion, fire_date: fireDate}).then(
            (element) => {
                console.log("then element");
                return element
            }
        ).catch(
            (error) => {
                console.log("error rayos");
            }
        );
        return alarm.id;
    }

    const todasLasAlarmas = async () => {
        const alarms = await ReactNativeAN.getScheduledAlarms();
    }

    const borrarAlarma  = async (id) => {
        ReactNativeAN.deleteAlarm(id);
    } 

    return {
        todasLasAlarmas,
        borrarAlarma,
        fechaParaAlarma,
        guardarAlarma
    }


}

export default useAlarm;