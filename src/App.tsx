import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';


import { StackNavigator } from './presentation/routes/StackNavigator';
import { SaidMenuNavigator } from './presentation/routes/SaidMenuNavigator';
export const App = () => {
  return (
    <NavigationContainer>
    {/*<StackNavigator/>*/}
    <SaidMenuNavigator/>
    </NavigationContainer>
    
  );
};
