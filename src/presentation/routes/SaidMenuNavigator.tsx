import React from 'react';

import { DrawerContent, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColor } from '../theme/theme';
import { View } from 'react-native';

const Drawer = createDrawerNavigator();

export const SaidMenuNavigator = () => {
  return (
    <Drawer.Navigator

drawerContent={ (props) => <CustonDrawerContent{...props}/>}

    screenOptions={{
        headerShown: false,
        drawerType: 'slide',

        drawerActiveBackgroundColor: globalColor.primary,
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: globalColor.primary,
        drawerItemStyle: {
            borderRadius: 100,
            paddingHorizontal: 20,
        }
        
    }}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

const CustonDrawerContent = (props: DrawerContentComponentProps)=> {
    return(
        <DrawerContentScrollView>
            <View style={{
                height: 200,
                backgroundColor: globalColor.primary,
                margin: 30,
                borderRadius: 50,
            }
            }/>
            <DrawerItemList{...props}/>
                
        </DrawerContentScrollView>
    )

}