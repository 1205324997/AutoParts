import React, { useState } from 'react';
import { Button, View, Text, Image, Platform } from 'react-native';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import ProductForm from '../../components/ProductForm'; // Importa el formulario
import { uploadImage } from '../settings/service/ImageService'; 


export const ProductScreen = () => {
  const [images, setImages] = useState<Asset[]>([]);
  const [formData, setFormData] = useState({
    client_id: '',
    request_date: '',
    city: '',
    photo: '',
    series: '',
    brand: '',
    model: '',
    year: '',
    chassis: '',
    canceled: false,
    id: '',
  });

  const handleSelectImages = async () => {
    try {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.7,
        selectionLimit: 10 - images.length,
      });

      if (response.assets && response.assets.length > 0) {
        setImages([...images, ...response.assets]);
      }
    } catch (error) {
      console.error('Error selecting images:', error);
    }
  };

  const handleFormChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = async () => {
    try {
      // Crear FormData para enviar al servidor
      const formDataToSend = new FormData();
      
      // Agregar las imágenes al FormData
      images.forEach((image, index) => {
        formDataToSend.append(`image_${index}`, {
          uri: image.uri!,
          type: 'image/jpeg',
          name: `image_${index}.jpg`,
        });
      });

      // Agregar los datos del formulario al FormData
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Enviar los datos al servidor
      await uploadImage(formDataToSend);

      // Restablecer el estado después de enviar el formulario
      setImages([]);
      setFormData({
        client_id: '',
        request_date: '',
        city: '',
        photo: '',
        series: '',
        brand: '',
        model: '',
        year: '',
        chassis: '',
        canceled: false,
        id: '',
      });

      console.log('Formulario enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Seleccionar imágenes" onPress={handleSelectImages} />

      {/* Mostrar imágenes seleccionadas */}
      <View>
        <Text>Imágenes seleccionadas:</Text>
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: Platform.OS === 'android' ? image.uri : image.uri?.replace('file://', '') }}
            style={{ width: 200, height: 200, margin: 5 }}
          />
        ))}
      </View>

      <ProductForm formData={formData} onFormChange={handleFormChange} />
      
      {/* Botón para enviar el formulario */}
      <Button title="Enviar formulario" onPress={handleSubmitForm} />
    </View>
  );
};
