// ClientSignupScreen.tsx
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { globalStyle } from '../../theme/theme';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

export const ClientSignupScreen = () => {
  const navigation = useNavigation(); 
  const [formData, setFormData] = useState({
    user: '',
    password: '',
    email: '',
    dni: '', 
    name: '',
    surname:'', 
    phone: '', 
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://3.93.5.254:8025/api/v1/auth/client/signup', formData);
      console.log('Response:', response.data);
      // Nos vamos a pantalla de productos 
      navigation.navigate('Products');
    } catch (error: any) {
      console.error('Error:', error);
    }
  };

  return (
    <View style={globalStyle.container}>
        <TextInput
        style={globalStyle.input}
         placeholder="Nombre de usuario"
             value={formData.user}
         onChangeText={(text) => setFormData({ ...formData, user: text })}
/>
        <TextInput
        style={globalStyle.input}
        placeholder="Cedula de identidad"
               value={formData.dni}
        onChangeText={(text) => setFormData({ ...formData, dni: text })}
      />
      
        <TextInput
        style={globalStyle.input}
        placeholder="Nombres Completos"
             value={formData.name}
        onChangeText={(text) => setFormData({ ...formData, name: text })}
      />
      <TextInput
        style={globalStyle.input}
        placeholder="Apellidos Completos"
             value={formData.surname}
        onChangeText={(text) => setFormData({ ...formData, surname: text })}
      />
      <TextInput
        style={globalStyle.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={formData.password}
        onChangeText={(text) => setFormData({ ...formData, password: text })}
      />

      <TextInput
        style={globalStyle.input}
        placeholder="Correo electrónico"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => setFormData({ ...formData, email: text })}
      />
     
<TextInput
        style={globalStyle.input}
        placeholder="Telefono"
               value={formData.phone}
        onChangeText={(text) => setFormData({ ...formData, phone: text })}
      />
     
<TouchableOpacity style={globalStyle.primaryButton} onPress={handleSubmit}>
  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
    <Text style={globalStyle.buttonText}>Registrarse</Text>
    <Icon name="arrow-forward-outline" size={20} color="white" />
  </View>
</TouchableOpacity>


    </View>
  );
};
