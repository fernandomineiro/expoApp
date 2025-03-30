import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';


const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/login`, { email, password });
      return response.data.token;
    } catch (error) {
      throw error.response.data;
    }
  },
  register: async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post(`${API_URL}/register`, { name, email, password });
      return response.data;
    } catch (error) {
      throw error.response.data;
    }
  }
};

export default authService;