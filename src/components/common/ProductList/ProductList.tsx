import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
  originalPrice?: string; // İndirimli fiyat için
  image?: string;
  brand?: string;
  discount?: string; // İndirim oranı
  isOutOfStock?: boolean;
}

interface ProductListProps {
  title: string;
  subtitle?: string;
  products: Product[];
  onProductPress?: (product: Product) => void;
  onSeeAllPress?: (title: string) => void;
  showSeeAll?: boolean;
  containerStyle?: any;
}

const ProductList: React.FC<ProductListProps> = ({
  title,
  subtitle,
  products,
  onProductPress,
  onSeeAllPress,
  showSeeAll = true,
  containerStyle,
}) => {
  const handleProductPress = (product: Product) => {
    onProductPress?.(product);
  };

  const handleSeeAllPress = () => {
    onSeeAllPress?.(title);
  };

  const renderProductItem = (product: Product) => {
    return (
      <TouchableOpacity
        key={product.id}
        style={styles.productCard}
        onPress={() => handleProductPress(product)}
        activeOpacity={0.8}
      >
        <View style={styles.imageContainer}>
          {product.image ? (
            <Image
              source={{ uri: product.image }}
              style={styles.productImage}
              resizeMode="contain"
            />
          ) : (
            <View style={styles.placeholderImage}>
              <Text style={styles.placeholderText}>📦</Text>
            </View>
          )}
          
          {product.discount && (
            <View style={styles.discountBadge}>
              <Text style={styles.discountText}>%{product.discount}</Text>
            </View>
          )}
        </View>

        <View style={styles.productInfo}>
          {product.brand && (
            <Text style={styles.brandText} numberOfLines={1}>
              {product.brand}
            </Text>
          )}
          
          <Text style={styles.productName} numberOfLines={2}>
            {product.name}
          </Text>

          <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>{product.price}</Text>
            {product.originalPrice && (
              <Text style={styles.originalPrice}>{product.originalPrice}</Text>
            )}
          </View>

          {product.isOutOfStock && (
            <View style={styles.outOfStockBadge}>
              <Text style={styles.outOfStockText}>Stokta Yok</Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  };

  if (products.length === 0) {
    return null;
  }

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && (
            <Text style={styles.subtitle}>{subtitle}</Text>
          )}
        </View>
        
        {showSeeAll && (
          <TouchableOpacity onPress={handleSeeAllPress} style={styles.seeAllButton}>
            <Text style={styles.seeAllText}>Tümünü Gör</Text>
            <Text style={styles.seeAllArrow}>›</Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {products.map(renderProductItem)}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 4,
  },
  seeAllText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
  seeAllArrow: {
    fontSize: 16,
    color: '#007AFF',
    marginLeft: 4,
    fontWeight: 'bold',
  },
  scrollView: {
    paddingLeft: 16,
  },
  scrollContent: {
    paddingRight: 16,
  },
  productCard: {
    width: 160,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    padding: 12,
    marginBottom: 8,
  },
  imageContainer: {
    position: 'relative',
    height: 120,
    marginBottom: 8,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 32,
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF4444',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  productInfo: {
    flex: 1,
  },
  brandText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    lineHeight: 18,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 14,
    color: '#999',
    textDecorationLine: 'line-through',
  },
  outOfStockBadge: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: '#999',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  outOfStockText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ProductList; 