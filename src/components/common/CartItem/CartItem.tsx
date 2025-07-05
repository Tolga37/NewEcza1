import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { QuantitySelector } from '../..';
import { CheckIcon, DeleteIcon, PackageIcon } from '../../icons';

interface CartItemProps {
  productName: string;
  price: string;
  originalPrice?: string;
  stock: number;
  quantity: number;
  image?: string;
  brand?: string;
  isSelected: boolean;
  onToggleSelection: () => void;
  onQuantityChange: (quantity: number) => void;
  onDelete: () => void;
  containerStyle?: any;
}

const CartItem: React.FC<CartItemProps> = ({
  productName,
  price,
  originalPrice,
  stock,
  quantity,
  image,
  brand,
  isSelected,
  onToggleSelection,
  onQuantityChange,
  onDelete,
  containerStyle,
}) => {
  const handleIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Checkbox */}
      <TouchableOpacity 
        style={styles.checkboxContainer}
        onPress={onToggleSelection}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && <CheckIcon size={16} color="#fff" />}
        </View>
      </TouchableOpacity>

      {/* Ürün Görseli */}
      <View style={styles.imageContainer}>
        {image ? (
          <Image
            source={{ uri: image }}
            style={styles.productImage}
            resizeMode="contain"
          />
        ) : (
          <View style={styles.placeholderImage}>
            <PackageIcon size={32} color="#999" />
          </View>
        )}
      </View>

      {/* Ürün Bilgileri */}
      <View style={[styles.productInfo, !isSelected && styles.productInfoDisabled]}>
        {brand && (
          <Text style={styles.brandText} numberOfLines={1}>
            {brand}
          </Text>
        )}
        
        <Text style={styles.productName} numberOfLines={2}>
          {productName}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.currentPrice}>{price}</Text>
          {originalPrice && (
            <Text style={styles.originalPrice}>{originalPrice}</Text>
          )}
        </View>

        <View style={styles.stockContainer}>
          <Text style={[
            styles.stockText, 
            stock === 0 ? styles.outOfStock : styles.inStock
          ]}>
            {stock === 0 ? 'Stokta Yok' : `Stok: ${stock} adet`}
          </Text>
        </View>

        {/* Quantity Selector */}
        <View style={styles.quantityContainer}>
          <QuantitySelector
            quantity={quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            minQuantity={1}
            maxQuantity={stock}
            disabled={!isSelected || stock === 0}
            containerStyle={styles.quantitySelector}
          />
        </View>
      </View>

      {/* Delete Button */}
      <TouchableOpacity 
        style={styles.deleteButton}
        onPress={onDelete}
        activeOpacity={0.7}
      >
        <DeleteIcon size={18} color="#dc3545" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  imageContainer: {
    width: 80,
    height: 80,
    marginRight: 12,
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
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  brandText: {
    fontSize: 12,
    color: '#999',
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  productName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    lineHeight: 18,
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  stockContainer: {
    marginTop: 2,
  },
  stockText: {
    fontSize: 12,
    fontWeight: '500',
  },
  inStock: {
    color: '#28a745',
  },
  outOfStock: {
    color: '#dc3545',
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  checkbox: {
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#28a745',
  },
  productInfoDisabled: {
    opacity: 0.5,
  },
  deleteButton: {
    width: 24,
    height: 24,
    marginLeft: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityContainer: {
    marginTop: 4,
  },
  quantitySelector: {
    width: 100,
  },
});

export default CartItem; 