import React from 'react';

import {Pressable, Text, View} from 'react-native';
import { globalStyle } from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {

  const navigation = useNavigation();

  return (
    <View style = {globalStyle.container}>

  <Pressable 
  onPress={ () => navigation.navigate('Authentication' as never) }
  style = {globalStyle.primaryButton}>
    <Text style = {globalStyle.buttonText}>
      Registrate
    </Text>
  </Pressable>

  </View>
  );
};
