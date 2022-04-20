import React from "react";

const useAngulos = () => {

    const diametro = 300;
    const numeroSize = 40;

    const coseno = (angulo,radioIn) => {
        let toRadians = Math.PI/180;
        let coseno = Math.cos(angulo*toRadians);
        return coseno * radioIn;
      }
    
      const seno = (angulo,radioIn) => {
        let toRadians = Math.PI/180;
        let seno = Math.sin(angulo*toRadians);
        return seno * radioIn;
      }

      return{
          coseno,
          seno,
          diametro,
          numeroSize
      }
}

export default useAngulos;