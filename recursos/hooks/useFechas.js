import React, {useState} from "react";

const useFechas = () => {

    const semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
    const semanaRes = ["Dom","Lun","Mar","Mie","Jue","Vie","Sab"];
    const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
    const mesesCom = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    const diasMes = [31,28,31,30,31,30,31,31,30,31,30,31];
    const keysMesBase = 'year-mes-01,year-mes-02,year-mes-03,year-mes-04,year-mes-05,year-mes-06,year-mes-07,year-mes-08,year-mes-09,year-mes-10,year-mes-11,year-mes-12,year-mes-13,year-mes-14,year-mes-15,year-mes-16,year-mes-17,year-mes-18,year-mes-19,year-mes-20,year-mes-21,year-mes-22,year-mes-23,year-mes-24,year-mes-25,year-mes-26,year-mes-27,year-mes-28,year-mes-29,year-mes-30,year-mes-31';
    
    const [mesMostrado,setMesMostrado] = useState(new Date().getMonth());
    const [yearMostrado,setYearMostrado] = useState((new Date().getFullYear()).toString());
    
    let biciesto = false;

    let semanaActual= []; 
    let fechaHoy = new Date();
    const fechaActual = {
      year : fechaHoy.getFullYear(),
      month : fechaHoy.getMonth(),
      day : fechaHoy.getDay()
    }
    

    let diaHoy = fechaHoy.getDay();
    let yearNow = fechaHoy.getFullYear();
    



    for(let i = 0;i < 7;i++){
        semanaActual[i] = {dia: semana[diaHoy],tareas:[]};
        diaHoy = diaHoy + 1;
        if(diaHoy > 6){
            diaHoy=0;
        }
    }

    let mesesActual= []; 
    let mesHoy = new Date().getMonth();
    let yearNext = false;
    for(let i = 0;i < 12;i++){
        mesesActual[i] = meses[mesHoy];
        mesHoy = mesHoy + 1;
        if(mesHoy > 11){
          mesHoy=0;
          yearNext = true;
        }
          //evaluar  biciesto
        if(mesesActual[i] == "Feb"){
          let yearEvaluate;
          if(yearNext){
            yearEvaluate = yearNow + 1;
          }else{
            yearEvaluate = yearNow;
          }
          biciesto =  (yearEvaluate % 400 === 0) ? true : 
              (yearEvaluate % 100 === 0) ? false : 
              yearEvaluate % 4 === 0;
        }
    }


    const fechaAhora = () => {
      let fechaEsta = new Date();

      return  fechaEsta.getFullYear() + '-' + mesNumToStr(fechaEsta.getMonth()) + '-' + diaToStrN(fechaEsta.getDate()) + 'T' + diaToStrN(fechaEsta.getHours()) + ':' + diaToStrN(fechaEsta.getMinutes()) + ':00.000Z';
      // 2022-04-19T17:58:00.000Z

    }

    const mesNumToStr = (mes) => {
      
      let mesAux = mes + 1;
      let mesStr = ''
      if(mesAux < 10){
        mesStr = '0' + mesAux.toString();
      }else{
        mesStr = mesAux.toString();
      }
      return mesStr;
    }

    const diaToStr = (dia) =>{
      let diaStr = ''
      if(dia < 10){
        diaStr = '0' + dia.toString();
      }else{
        diaStr = dia.toString();
      }
      return diaStr;
    }

    const diaToStrN = (dia) =>{
      let diaStr = ''
      if(dia < 10){
        diaStr = '0' + dia.toString();
      }else{
        diaStr = dia.toString();
      }
      return diaStr;
    }

    const [fechaString,setfechaString] = useState( new Date().getFullYear().toString() + '-' + mesNumToStr(new Date().getMonth()) +'-'+ diaToStr(new Date().getDate()));

    const keysRepetirMes = (diasMesRepetir,tareasPorDia) =>{
      let keys = [];
      let yearKey = yearNow.toString();
      let todoMismoYear = false;
        for(i=0;i<mesesActual.length;i++){
          let mes;
          //ver si es este o el siguiente year
          if(i==0){
            if(meses.indexOf(mesesActual[0]) == 0){
              todoMismoYear = true;
            }
          }

          for(ndxDiaRepetir = 0; ndxDiaRepetir < diasMesRepetir.length; ndxDiaRepetir++){
            if(todoMismoYear){
              mes = mesNumToStr(meses.indexOf(mesesActual[i]));
              keys.push([yearKey + '-' + mes + '-' + diasMesRepetir[ndxDiaRepetir],JSON.stringify(tareasPorDia)]);
            }else{
              if(meses.indexOf(mesesActual[i])==0){
                yearKey = (yearNow + 1).toString();
              }
              mes = mesNumToStr(meses.indexOf(mesesActual[i]));
              keys.push([yearKey + '-' + mes + '-' + diasMesRepetir[ndxDiaRepetir],JSON.stringify(tareasPorDia)]);
            }
          }


        }
        return keys;
    }


    const hora24From12 = (hora,intervalo) =>{
      let hora24Str;
      switch(intervalo){
        case 'AM':
            if(hora == 12){
              hora24Str = '00';
            }else{
              hora24Str = diaToStr(hora);
            }
          break;
        case 'PM':
          if(hora == 12){
            hora24Str = '12';
          }else{
            hora24Str = (hora + 12).toString();
          }
          break;
        default:
          break;
      }

      return hora24Str;


    }


    const semanaPorMes = (mes,year) =>{
      let semanaMesActual= []; 
      let diaUno = new Date(year + '-' + mes + '-01T12:00:00Z').getDay();
      for(let i = 0;i < 7;i++){
        semanaMesActual[i] = semanaRes[diaUno];
        diaUno = diaUno + 1;
          if(diaUno > 6){
            diaUno=0;
          }
      }
      return semanaMesActual;
    }

      return{
        semanaActual,
        mesesActual,
        semanaPorMes,
        mesMostrado,
        setMesMostrado,
        mesNumToStr,
        mesesCom,
        meses,
        diasMes,
        biciesto,
        fechaString,
        setfechaString,
        diaToStr,
        keysRepetirMes,
        yearMostrado,
        setYearMostrado,
        keysMesBase,
        hora24From12,
        fechaAhora,
        diaToStrN
      }
}

export default useFechas;