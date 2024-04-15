/*import create from 'zustand';
import axios from 'axios';

interface AuthState {
  login: (formData: FormData) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>((set) => ({
  login: async (formData) => {
    try {
     
      const response = await axios.post('http://3.93.5.254:8025/api/v1/auth/client/signup', formData);
      
      if (response.status === 200) {
       
        return true;
      } else {
        return false;
      }
    } catch (error: any) { 
      console.error('Error:', error.response?.data || error.message || error);
      return false;
    }
  },
}));*/
