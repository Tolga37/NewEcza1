import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';
import { useDispatch } from 'react-redux';
import { setSessionToken, setEmail } from '../redux/slices/userSlice';
import { loginRequest } from '../api/modules/authApi';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();

  const onLogin = async () => {
    if (!username || !password) {
      Alert.alert('Hata', 'Lütfen kullanıcı adı ve şifreyi girin.');
      return;
    }

    try {
      const response = await loginRequest({
        json: {
          Username: username,
          Password: password,
        },
      });
      console.log('RESP', response);
      if (response?.IsSuccess && response?.Data) {
       // dispatch(setSessionToken(response.ReturnValue.Token));
       // dispatch(setEmail(response.ReturnValue.Email));
        navigation.replace('Home');
      } else {
        Alert.alert('Giriş Başarısız', 'Kullanıcı adı veya şifre hatalı.');
      }
    } catch (error) {
      Alert.alert('Hata', 'Sunucuya bağlanılamadı.');
      console.warn('Login error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>

      <TextInput
        style={styles.input}
        placeholder="Kullanıcı Adı"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button title="Giriş Yap" onPress={onLogin} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24 },
  title: { fontSize: 24, marginBottom: 24, textAlign: 'center' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
  },
});
