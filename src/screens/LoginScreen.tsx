import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import authService from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const token = await authService.login(email, password);
      navigation.navigate('Home');
    } catch (error) {
      if (error.message === 'Usuário não encontrado') {
        alert('Usuário não encontrado');
      } else if (error.message === 'Email ou senha inválidos') {
        alert('Email ou senha inválidos');
      } else if (error.message === 'Senha incorreta') {
        alert('Senha incorreta');
      } else {
        alert('Erro ao fazer login. Tente novamente.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerLink}>Cadastre-se aqui!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... outros estilos ...
  registerLink: {
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default LoginScreen;