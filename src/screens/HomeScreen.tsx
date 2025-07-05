import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Header, SearchInput, CategoryStories, ImageSlider, ProductList, MenuIcon, NotificationIcon } from '../components';
import { appLogo } from '../assets/images';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Örnek kategoriler
  const categories = [
    { id: '1', name: 'İlaçlar', color: '#e3f2fd' },
    { id: '2', name: 'Medikal Cihazlar', color: '#f3e5f5' },
    { id: '3', name: 'Kozmetik', color: '#e8f5e8' },
    { id: '4', name: 'Bebek Ürünleri', color: '#fff3e0' },
    { id: '5', name: 'Vitamin', color: '#fce4ec' },
    { id: '6', name: 'Dermokozmetik', color: '#e0f2f1' },
    { id: '7', name: 'Hijyen', color: '#f1f8e9' },
    { id: '8', name: 'Gıda Takviyeleri', color: '#e8eaf6' },
  ];

  // Örnek slider verileri
  const sliderData = [
    {
      id: '1',
      title: 'Yeni Ürünler',
      subtitle: 'En yeni medikal ürünleri keşfedin',
      backgroundColor: '#e3f2fd',
    },
    {
      id: '2',
      title: 'Özel İndirimler',
      subtitle: '%50 ye varan indirimler',
      backgroundColor: '#f3e5f5',
    },
    {
      id: '3',
      title: 'Hızlı Teslimat',
      subtitle: 'Aynı gün kargo imkanı',
      backgroundColor: '#e8f5e8',
    },
    {
      id: '4',
      title: 'Uzman Danışmanlık',
      subtitle: '7/24 eczacı desteği',
      backgroundColor: '#fff3e0',
    },
  ];

  // Örnek ürün listesi - Günün Fırsatları
  const dailyDeals = [
    {
      id: '1',
      name: 'Smartdrops Bal Limon & C Vitaminli 24 Pastil',
      price: '24,50 TL',
      originalPrice: '32,00 TL',
      brand: 'OUTLETECZA',
      discount: '23',
    },
    {
      id: '2',
      name: 'Pulsemed Dijital Ateş Ölçer KFT-04',
      price: '43,00 TL',
      originalPrice: '55,00 TL',
      brand: 'Bdemir',
      discount: '22',
    },
    {
      id: '3',
      name: 'Avene Thermal Spring Water Spray 300ml',
      price: '89,90 TL',
      originalPrice: '120,00 TL',
      brand: 'AVENE',
      discount: '25',
    },
    {
      id: '4',
      name: 'La Roche Posay Effaclar Duo+ 40ml',
      price: '156,70 TL',
      originalPrice: '210,00 TL',
      brand: 'LA ROCHE POSAY',
      discount: '25',
    },
  ];

  // Örnek ürün listesi - Fırsat Ürünleri
  const opportunityProducts = [
    {
      id: '5',
      name: 'Argivit Focus 30 Tablet',
      price: '366,88 TL',
      brand: 'ARGIVIT',
    },
    {
      id: '6',
      name: 'Sorvagen Smart Sitikolin DHA Omega 3 ve B12 30 Kapsül',
      price: '299,99 TL',
      originalPrice: '350,00 TL',
      brand: 'SORVAGEN',
      discount: '14',
    },
    {
      id: '7',
      name: 'Centrum Silver Multivitamin 100 Tablet',
      price: '245,50 TL',
      brand: 'CENTRUM',
    },
    {
      id: '8',
      name: 'Bepanthol Baby Pişik Kremi 100g',
      price: '87,45 TL',
      originalPrice: '95,00 TL',
      brand: 'BEPANTHOL',
      discount: '8',
    },
  ];

  // Ürün listesi konfigürasyonu
  const productSections = [
    {
      id: 'daily-deals',
      title: 'Günün Fırsatları',
      subtitle: 'Özel indirimli ürünler',
      products: dailyDeals,
    },
    {
      id: 'opportunity-products',
      title: 'Fırsat Ürünleri',
      subtitle: 'Kaçırılmayacak fırsatlar',
      products: opportunityProducts,
    },
  ];

  const handleMenuPress = () => {
    console.log('Menu pressed');
  };

  const handleNotificationPress = () => {
    console.log('Notification pressed');
  };

  const handleSearch = (query: string) => {
    console.log('Arama yapılıyor:', query);
    // Burada API çağrısı yapılabilir
  };

  const handleSearchTextChange = (text: string) => {
    setSearchQuery(text);
    // Gerçek zamanlı arama için burada API çağrısı yapılabilir
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    console.log('Arama temizlendi');
  };

  const handleCategoryPress = (category: any) => {
    console.log('Kategori seçildi:', category.name);
    // Burada kategori sayfasına yönlendirme yapılabilir
  };

  const handleSlidePress = (item: any, index: number) => {
    console.log('Slider tıklandı:', item.title, 'Index:', index);
    // Burada slider item'a göre yönlendirme yapılabilir
  };

  const handleProductPress = (product: any) => {
    console.log('Ürün tıklandı:', product.name);
    // Burada ürün detay sayfasına yönlendirme yapılabilir
  };

  const handleSeeAllPress = (title: string) => {
    console.log('Tümünü gör tıklandı:', title);
    // Burada kategori sayfasına yönlendirme yapılabilir
  };

  return (
    <View style={styles.container}>
      <Header
        showLogo={true}
        logoSource={appLogo}
        leftElement={<MenuIcon size={20} color="#333" />}
        rightElement={<NotificationIcon size={20} color="#333" />}
        onLeftPress={handleMenuPress}
        onRightPress={handleNotificationPress}
      />
      
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Arama Alanı */}
        <View style={styles.searchContainer}>
          <SearchInput
            placeholder="İlaç, ürün veya kategori ara..."
            value={searchQuery}
            onChangeText={handleSearchTextChange}
            onSearch={handleSearch}
            onClear={handleClearSearch}
            containerStyle={styles.searchInput}
          />
        </View>

        {/* Kategoriler */}
        <CategoryStories
          categories={categories}
          onCategoryPress={handleCategoryPress}
          title="Kategoriler"
          showTitle={false}
        />

        {/* Slider */}
        <ImageSlider
          data={sliderData}
          autoPlay={true}
          autoPlayInterval={4000}
          showDots={true}
          sliderHeight={180}
          onSlidePress={handleSlidePress}
          containerStyle={styles.sliderContainer}
        />

        {/* Dinamik Ürün Listeleri */}
        {productSections.map((section) => (
          <ProductList
            key={section.id}
            title={section.title}
            subtitle={section.subtitle}
            products={section.products}
            onProductPress={handleProductPress}
            onSeeAllPress={handleSeeAllPress}
          />
        ))}

        {/* İçerik Alanı */}
        <View style={styles.content}>
          {searchQuery.length > 0 && (
            <View style={styles.searchInfo}>
              <Text style={styles.searchText}>
                Arama sorgusu: "{searchQuery}"
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
    backgroundColor: '#fff',
  },
  searchInput: {
    marginBottom: 0,
  },
  sliderContainer: {
    marginVertical: 10,
  },
  content: {
    flex: 1,
    padding: 20,
    // backgroundColor: '#fff',
  },
  searchInfo: {
    backgroundColor: '#e3f2fd',
    padding: 12,
    borderRadius: 8,
    marginBottom: 20,
  },
  searchText: {
    fontSize: 14,
    color: '#1976d2',
    fontWeight: '500',
  },
  menuIcon: {
    fontSize: 20,
    color: '#333',
  },
  notificationIcon: {
    fontSize: 18,
    color: '#333',
  },
});

export default HomeScreen;
