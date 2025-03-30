import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import authService from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await authService.register(name, email, password);
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Erro', error.message || 'Erro ao cadastrar usuário');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <Input placeholder="Nome" value={name} onChangeText={setName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default RegisterScreen;