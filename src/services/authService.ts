import axios from 'axios';

const API_URL = 'http://localhost:3000/auth';

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

export default {
  login,
};