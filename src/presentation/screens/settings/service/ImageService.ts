import axios from 'axios';

export const uploadImage = async (formData: FormData) => {
  try {
    const response = await axios.post('http://3.93.5.254:8025/api/v1/part/request/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
