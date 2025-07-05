import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ShippingOptions } from '../..';

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  description?: string;
  estimatedDays?: string;
}

interface CartVendorCardProps {
  vendorName: string;
  isSelected: boolean;
  onToggleSelection: () => void;
  onDelete: () => void;
  children: React.ReactNode;
  shippingOptions: ShippingOption[];
  selectedShippingId: string;
  onSelectShipping: (optionId: string) => void;
  totalAmount: number;
  containerStyle?: any;
}

const CartVendorCard: React.FC<CartVendorCardProps> = ({
  vendorName,
  isSelected,
  onToggleSelection,
  onDelete,
  children,
  shippingOptions,
  selectedShippingId,
  onSelectShipping,
  totalAmount,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Satıcı Header */}
      <TouchableOpacity 
        style={styles.header}
        onPress={onToggleSelection}
        activeOpacity={0.7}
      >
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
          {isSelected && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={styles.vendorName}>{vendorName}</Text>
        <TouchableOpacity 
          style={styles.deleteButton}
          onPress={onDelete}
          activeOpacity={0.7}
        >
          <Text style={styles.deleteIcon}>🗑️</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Ürün Listesi */}
      <View style={[styles.content, !isSelected && styles.contentDisabled]}>
        {children}
        
        {/* Kargo Seçenekleri */}
        <ShippingOptions
          options={shippingOptions}
          selectedOptionId={selectedShippingId}
          onSelectOption={onSelectShipping}
        />
        
        {/* Toplam Tutar */}
        <View style={styles.totalContainer}>
          <Text style={styles.totalLabel}>Toplam Tutar:</Text>
          <Text style={styles.totalAmount}>{totalAmount.toFixed(2)} TL</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  checkboxSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
  checkmark: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  vendorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contentDisabled: {
    opacity: 0.5,
  },
  deleteButton: {
    padding: 4,
    minWidth: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    fontSize: 14,
    color: '#666',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
});

export default CartVendorCard; 