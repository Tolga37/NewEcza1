import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Header, CartVendorCard, CartItem } from '../components';

interface CartProduct {
  id: string;
  name: string;
  price: string;
  originalPrice?: string;
  stock: number;
  quantity: number;
  brand?: string;
  image?: string;
  isSelected: boolean;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  description?: string;
  estimatedDays?: string;
}

interface CartVendor {
  id: string;
  name: string;
  isSelected: boolean;
  selectedShippingId: string;
  shippingOptions: ShippingOption[];
  products: CartProduct[];
}

const CartScreen = () => {
  // Örnek satıcı ve ürün verileri
  const [vendors, setVendors] = useState<CartVendor[]>([
    {
      id: '1',
      name: 'Eczane Demiroğlu',
      isSelected: true,
      selectedShippingId: 'standard',
      shippingOptions: [
        {
          id: 'standard',
          name: 'Standart Kargo',
          price: 15.90,
          description: 'Kapıda ödeme mevcut',
          estimatedDays: '2-3 iş günü',
        },
        {
          id: 'fast',
          name: 'Hızlı Kargo',
          price: 24.90,
          description: 'Aynı gün teslimat (saat 14:00\'a kadar)',
          estimatedDays: 'Aynı gün',
        },
        {
          id: 'free',
          name: 'Ücretsiz Kargo',
          price: 0,
          description: '150 TL ve üzeri alışverişlerde',
          estimatedDays: '3-5 iş günü',
        },
      ],
      products: [
        {
          id: 'p1',
          name: 'Parol 500mg 20 Tablet',
          price: '18,50 TL',
          originalPrice: '22,00 TL',
          stock: 15,
          quantity: 2,
          brand: 'ATABAY',
          isSelected: true,
        },
        {
          id: 'p2',
          name: 'Aspirin Protect 100mg 30 Tablet',
          price: '24,90 TL',
          stock: 8,
          quantity: 1,
          brand: 'BAYER',
          isSelected: false,
        },
      ],
    },
    {
      id: '2',
      name: 'Sağlık Eczanesi',
      isSelected: true,
      selectedShippingId: 'standard',
      shippingOptions: [
        {
          id: 'standard',
          name: 'Standart Kargo',
          price: 12.50,
          description: 'Güvenli teslimat',
          estimatedDays: '1-2 iş günü',
        },
        {
          id: 'express',
          name: 'Express Kargo',
          price: 29.90,
          description: 'Öncelikli teslimat',
          estimatedDays: 'Ertesi gün',
        },
      ],
      products: [
        {
          id: 'p3',
          name: 'Supradyn All Day 30 Tablet',
          price: '89,00 TL',
          originalPrice: '105,00 TL',
          stock: 12,
          quantity: 1,
          brand: 'BAYER',
          isSelected: true,
        },
      ],
    },
    {
      id: '3',
      name: 'Merkez Eczane',
      isSelected: false,
      selectedShippingId: 'standard',
      shippingOptions: [
        {
          id: 'standard',
          name: 'Standart Kargo',
          price: 19.90,
          description: 'Normal teslimat',
          estimatedDays: '3-4 iş günü',
        },
      ],
      products: [
        {
          id: 'p4',
          name: 'Omega 3 1000mg 60 Kapsül',
          price: '45,00 TL',
          stock: 0,
          quantity: 1,
          brand: 'SOLGAR',
          isSelected: true,
        },
      ],
    },
  ]);

  // Toplam tutar hesaplama fonksiyonu
  const calculateVendorTotal = (vendor: CartVendor): number => {
    const productsTotal = vendor.products
      .filter(product => product.isSelected)
      .reduce((total, product) => {
        const price = parseFloat(product.price.replace(' TL', '').replace(',', '.'));
        return total + (price * product.quantity);
      }, 0);
    
    const selectedShipping = vendor.shippingOptions.find(
      option => option.id === vendor.selectedShippingId
    );
    const shippingCost = selectedShipping ? selectedShipping.price : 0;
    
    return productsTotal + shippingCost;
  };

  const handleVendorToggle = (vendorId: string) => {
    setVendors(prevVendors =>
      prevVendors.map(vendor =>
        vendor.id === vendorId
          ? { ...vendor, isSelected: !vendor.isSelected }
          : vendor
      )
    );
  };

  const handleShippingSelect = (vendorId: string, shippingId: string) => {
    setVendors(prevVendors =>
      prevVendors.map(vendor =>
        vendor.id === vendorId
          ? { ...vendor, selectedShippingId: shippingId }
          : vendor
      )
    );
  };

  const handleProductToggle = (vendorId: string, productId: string) => {
    setVendors(prevVendors =>
      prevVendors.map(vendor =>
        vendor.id === vendorId
          ? {
              ...vendor,
              products: vendor.products.map(product =>
                product.id === productId
                  ? { ...product, isSelected: !product.isSelected }
                  : product
              ),
            }
          : vendor
      )
    );
  };

  const handleProductDelete = (vendorId: string, productId: string) => {
    setVendors(prevVendors =>
      prevVendors.map(vendor =>
        vendor.id === vendorId
          ? {
              ...vendor,
              products: vendor.products.filter(product => product.id !== productId),
            }
          : vendor
      )
      // Eğer satıcının ürünü kalmadıysa satıcıyı da sil
      .filter(vendor => vendor.products.length > 0)
    );
  };

  const handleVendorDelete = (vendorId: string) => {
    setVendors(prevVendors =>
      prevVendors.filter(vendor => vendor.id !== vendorId)
    );
  };

  const handleQuantityChange = (vendorId: string, productId: string, newQuantity: number) => {
    setVendors(prevVendors =>
      prevVendors.map(vendor =>
        vendor.id === vendorId
          ? {
              ...vendor,
              products: vendor.products.map(product =>
                product.id === productId
                  ? { ...product, quantity: newQuantity }
                  : product
              ),
            }
          : vendor
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Sepetim"
        showLogo={false}
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {vendors.map(vendor => (
          <CartVendorCard
            key={vendor.id}
            vendorName={vendor.name}
            isSelected={vendor.isSelected}
            onToggleSelection={() => handleVendorToggle(vendor.id)}
            onDelete={() => handleVendorDelete(vendor.id)}
            shippingOptions={vendor.shippingOptions}
            selectedShippingId={vendor.selectedShippingId}
            onSelectShipping={(shippingId) => handleShippingSelect(vendor.id, shippingId)}
            totalAmount={calculateVendorTotal(vendor)}
          >
            {/* Satıcının Ürünleri */}
            {vendor.products.map((product, index) => (
              <CartItem
                key={product.id}
                productName={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                stock={product.stock}
                quantity={product.quantity}
                brand={product.brand}
                image={product.image}
                isSelected={product.isSelected}
                onToggleSelection={() => handleProductToggle(vendor.id, product.id)}
                onQuantityChange={(newQuantity) => handleQuantityChange(vendor.id, product.id, newQuantity)}
                onDelete={() => handleProductDelete(vendor.id, product.id)}
                containerStyle={
                  index === vendor.products.length - 1 
                    ? { borderBottomWidth: 0 } 
                    : undefined
                }
              />
            ))}
          </CartVendorCard>
        ))}
        
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
  bottomSpace: {
    height: 20,
  },
});

export default CartScreen; 