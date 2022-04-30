import React from 'react';
import {SafeAreaView,LogBox} from 'react-native';
import StatusBarComp from './recursos/componentes/StatusBarComp';
import estilos from './recursos/estilos/Estilos';
import PantallaInicio from './recursos/pantallas/PantallaInicio';
import { Context } from './recursos/context/context';
import PantallaPruebas from './recursos/pantallas/PantallaPruebas';

LogBox.ignoreLogs([
  "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
  "Animated.event now requires a second argument for options"
]);

const App = () => {
  return(
    <>
        <SafeAreaView  style={estilos.fondoApp}>
          <StatusBarComp/>
            <AppContext>
              <PantallaInicio></PantallaInicio>
              {/* <PantallaPruebas/> */}
            </AppContext>
        </SafeAreaView>
    </>
  );
}


const AppContext = ({children}) =>{
  return(
    <Context>
      {children}
    </Context>
  );
}


export default App;
