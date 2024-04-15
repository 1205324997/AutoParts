import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface ProductFormProps {
  formData: {
    client_id: string;
    request_date: string;
    city: string;
    photo: string;
    series: string;
    brand: string;
    model: string;
    year: string;
    chassis: string;
    canceled: boolean;
    id: string;
  };
  onFormChange: (name: string, value: string) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ formData, onFormChange }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="ID del cliente"
        value={formData.client_id}
        onChangeText={(value) => onFormChange('client_id', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de solicitud"
        value={formData.request_date}
        onChangeText={(value) => onFormChange('request_date', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ciudad"
        value={formData.city}
        onChangeText={(value) => onFormChange('city', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Foto"
        value={formData.photo}
        onChangeText={(value) => onFormChange('photo', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Serie"
        value={formData.series}
        onChangeText={(value) => onFormChange('series', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Marca"
        value={formData.brand}
        onChangeText={(value) => onFormChange('brand', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo"
        value={formData.model}
        onChangeText={(value) => onFormChange('model', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Año"
        value={formData.year}
        onChangeText={(value) => onFormChange('year', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Chasis"
        value={formData.chassis}
        onChangeText={(value) => onFormChange('chassis', value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
    marginBottom: 2,
    
  },
});

export default ProductForm;
