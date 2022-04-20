import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PantallaSemana from '../pantallas/PantallaSemana';
import TabComponente from '../componentes/TabComponente';
import PantallaMensual from '../pantallas/PantallaMensual';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      tabBar={props => <TabComponente {...props}/>}
    >
      <Tab.Screen name="PantallaSemana"  component={PantallaSemana} />
      <Tab.Screen name="PantallaMensual" component={PantallaMensual} />
    </Tab.Navigator>
  );
}

export default TabNavigator;