import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
const useDB = () => {

    // AsyncStorage.clear();

    //(llave para la BD, valor a guardar, state que muestra el registro)
    const setItem = async (valueKey,value,setState) =>{
        await AsyncStorage.setItem(valueKey,JSON.stringify(value));
        setState(value);
    }

    const getItem = async (valueKey) => {
        try{
            let objStr =  await AsyncStorage.getItem(valueKey);
            if(objStr){
                return JSON.parse(objStr);
            }else{
                return [];
            }
            
        }catch(e){
            return [];
        }
    }


    multiSet = async (objetosListos) => {
        try {
          await AsyncStorage.multiSet(objetosListos);
        } catch(e) {
          //save error
        }
      
        console.log("multisetGuardado")
      }

    multiGet = async (arregloKeys) => {
        let values;
        let retorno = [];
        try {
          values = await AsyncStorage.multiGet(arregloKeys);
          //esto normalmente siempre se cumple [key,null][key,obj]...
          if(values){
            let retornoStrings =  values.filter(
                (item) =>{
                    if(item[1]){
                        return item;
                    }
                }
            );
            retorno = retornoStrings.map(
                (item) => {
                    return [item[0],JSON.parse(item[1])]
                }
            );
            }else{
                retorno =  [];
            }
        } catch(e) {
            retorno =  [];
        }

        return retorno;
    }



    return {
        setItem,
        getItem,
        multiSet,
        multiGet
    }

}

export default useDB;