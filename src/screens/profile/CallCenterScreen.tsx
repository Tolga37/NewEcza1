import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components';

const CallCenterScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Çağrı Merkezi"
        showLogo={false}
        backgroundColor="#f8f9fa"
        leftElement={
          <TouchableOpacity onPress={handleGoBack}>
            <Text style={styles.backButton}>←</Text>
          </TouchableOpacity>
        }
        onLeftPress={handleGoBack}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Çağrı Merkezi</Text>
        <Text style={styles.subtitle}>Bu sayfa henüz geliştirilmedi</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  backButton: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default CallCenterScreen; 