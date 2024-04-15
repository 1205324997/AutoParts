import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const HomeScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={ () => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>
            <Icon name="menu-outline" size={28} color="blue" />;
            </Text>
        </Pressable>
      )
    });
  }, []);

  return (
    <View style={globalStyle.container}>
      <Pressable
      onPress={ () => navigation.navigate('ClientSignup' as never)}
      style = {globalStyle.primaryButton}>
        <Text style={globalStyle.buttonText}>
          Registrate
        </Text>
      </Pressable>
    </View>
  );
};
