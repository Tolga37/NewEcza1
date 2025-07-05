import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Header, ProfileMenuCard } from '../components';
import { RootStackParamList } from '../navigation/RootNavigator';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

const ProfileScreen = () => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleSettingsPress = () => {
    console.log('Settings pressed');
  };

  const handleMenuPress = (menuTitle: string) => {
    switch (menuTitle) {
      case 'Profilim':
        navigation.navigate('MyProfile');
        break;
      case 'Hesabım':
        navigation.navigate('Account');
        break;
      case 'Teslimat Adreslerim':
        navigation.navigate('DeliveryAddress');
        break;
      case 'Fatura Adreslerim':
        navigation.navigate('BillingAddress');
        break;
      case 'SMS Ayarlarım':
        navigation.navigate('SmsSettings');
        break;
      case 'Banka Hesap Bilgilerim':
        navigation.navigate('BankAccount');
        break;
      case 'Satış ve Kargo Bilgilerim':
        navigation.navigate('SalesCargo');
        break;
      case 'Hesap Hareketleri':
        navigation.navigate('TransactionHistory');
        break;
      case 'Favorilerim':
        navigation.navigate('Favorites');
        break;
      case 'Mesajlarım':
        navigation.navigate('Messages');
        break;
      case 'İşlem Yapılması Gereken Siparişler':
        navigation.navigate('PendingOrders');
        break;
      case 'Kara Listedekiler':
        navigation.navigate('Blacklist');
        break;
      case 'Müşteri Hizmetleri':
        navigation.navigate('CustomerService');
        break;
      case 'Çağrı Merkezi':
        navigation.navigate('CallCenter');
        break;
      default:
        Alert.alert('Menü Tıklandı', `${menuTitle} sayfası henüz hazır değil`);
    }
  };

  const handleLogout = () => {
    Alert.alert(
      'Güvenli Çıkış',
      'Hesaptan çıkmak istediğinize emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        { 
          text: 'Çıkış Yap', 
          style: 'destructive', 
          onPress: () => {
            // TODO: Logout işlemi ve Login sayfasına yönlendirme
            navigation.navigate('Login');
          }
        },
      ]
    );
  };

  const menuItems = [
    { title: 'Profilim', icon: '👤' },
    { title: 'Hesabım', icon: '⚙️' },
    { title: 'Teslimat Adreslerim', icon: '📍' },
    { title: 'Fatura Adreslerim', icon: '📄' },
    { title: 'SMS Ayarlarım', icon: '📱' },
    { title: 'Banka Hesap Bilgilerim', icon: '🏦' },
    { title: 'Satış ve Kargo Bilgilerim', icon: '📦' },
    { title: 'Hesap Hareketleri', icon: '💰' },
    { title: 'Favorilerim', icon: '❤️' },
    { title: 'Mesajlarım', icon: '✉️' },
    { title: 'İşlem Yapılması Gereken Siparişler', icon: '⏰' },
    { title: 'Kara Listedekiler', icon: '🚫' },
    { title: 'Müşteri Hizmetleri', icon: '🎧' },
    { title: 'Çağrı Merkezi', icon: '📞' },
  ];

  return (
    <View style={styles.container}>
      <Header
        title="Profil"
        showLogo={false}
        rightElement={<Text style={styles.settingsIcon}>⚙️</Text>}
        onRightPress={handleSettingsPress}
        backgroundColor="#f8f9fa"
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <ProfileMenuCard
              key={index}
              title={item.title}
              icon={item.icon}
              onPress={() => handleMenuPress(item.title)}
            />
          ))}
        </View>
        
        {/* Güvenli Çıkış Butonu */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutIcon}>🔓</Text>
          <Text style={styles.logoutText}>Güvenli Çıkış</Text>
        </TouchableOpacity>
        
        {/* Alt boşluk */}
        <View style={styles.bottomSpace} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  menuContainer: {
    paddingTop: 16,
  },
  settingsIcon: {
    fontSize: 20,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  logoutIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  logoutText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#ff4757',
  },
  bottomSpace: {
    height: 20,
  },
});

export default ProfileScreen; 