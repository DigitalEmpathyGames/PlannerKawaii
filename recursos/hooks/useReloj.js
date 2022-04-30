import React,{useState} from "react";
import NumeroReloj from "../componentes/NumeroReloj";
import useAngulos from "./useAngulos";

const useReloj = () => {
    const diametro = useAngulos().diametro;
    const radio = diametro/2;
    const numeroSize = useAngulos().numeroSize;
    const x0 = radio - (numeroSize/2);
    const y0 = radio - (numeroSize/2);
    const horas = 12;
    const minutos = 10;

    const {coseno,seno} = useAngulos();

    //Numeros en pantalla chiquita
    const [horaPantallaChiquita,setHoraPantallaChiquita] = useState(12);
    const [minutosPantallaChiquita,setMinutosPantallaChiquita] = useState(['0','0']);
    const [amPm,setamPm] = useState('AM');
    const [posMinuto,setPosMinuto] = useState(0);


    
    const setearMinuto = (minuto) =>{
      let arrAux = minutosPantallaChiquita.map(
        (item) => {
          return item;
        }
      );
      arrAux[posMinuto] = minuto.toString();
      if( parseInt(arrAux[0]) > 5){
        arrAux[posMinuto] = '5'
      }
      setMinutosPantallaChiquita(arrAux);
      setPosMinuto(posMinuto + 1);
      if(posMinuto > 0){
        setPosMinuto(0);
      }

    }

    const reiniciarMinutos = () => {
      setMinutosPantallaChiquita(['0','0']);
      setPosMinuto(0);
    }

// PM AM



    let horasArr=[];
    let horaAnguloActual = 3;
  
    let anguloActual = 0.0;
    let anguloshoras = 360.0/horas;
  //  dibujar horas
  for(let i = 0;i< horas;i++){
    let posX = x0 + (coseno(anguloActual,radio));
    let posY = y0 + (seno(anguloActual,radio));
    let horaNum = 
      <NumeroReloj
        key={i.toString()}
        numero = {horaAnguloActual}
        x = {posX}
        y = {posY}
        numeroSize = {numeroSize}
        color = {"#F8E6EE"}
        setReloj = {setHoraPantallaChiquita}
      />;

    horasArr.push(horaNum);
    horaAnguloActual = horaAnguloActual + 1;
    if(horaAnguloActual > 12){
      horaAnguloActual = 1
    }
    anguloActual = anguloActual + anguloshoras;
  }


  // dibujar minutos
  anguloActual = 0.0;
  anguloshoras = 360.0/minutos;
  let minutosArr = [];
  let minutoAnguloActual = 3;
  for(let i = 0;i< 10;i++){
    let posX = (x0) + (coseno(anguloActual,radio - numeroSize*1.4));
    let posY = (y0) + (seno(anguloActual,radio - numeroSize*1.4));
    let horaNum = 
      <NumeroReloj
        key={i.toString()}
        numero = {minutoAnguloActual}
        x = {posX}
        y = {posY}
        numeroSize = {numeroSize}
        color = {"#F9AED7"}
        setReloj = {setearMinuto}
      />;

    minutosArr.push(horaNum);
    minutoAnguloActual = minutoAnguloActual + 1;
    if(minutoAnguloActual > 9){
      minutoAnguloActual = 0
    }
    anguloActual = anguloActual + anguloshoras;
  }

  const cerrarReloj = (abrirCerarReloj,horasState,setHoras) =>{
    abrirCerarReloj(false);

    let nuevaHora = {
      id:new Date().getMilliseconds().toString(),
      hora:horaPantallaChiquita,
      minutos:minutosPantallaChiquita,
      intervalo:amPm
    }

      setHoras([nuevaHora]);


  }


  return{
    horasArr,
    minutosArr,
    horaPantallaChiquita,
    minutosPantallaChiquita,
    amPm,
    reiniciarMinutos,
    setamPm,
    cerrarReloj
  }

}

export default useReloj;