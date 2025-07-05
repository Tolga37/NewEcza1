import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PlusIcon, MinusIcon } from '../../icons';

interface QuantitySelectorProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  minQuantity?: number;
  maxQuantity?: number;
  containerStyle?: any;
  buttonStyle?: any;
  textStyle?: any;
  disabled?: boolean;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  minQuantity = 1,
  maxQuantity = 99,
  containerStyle,
  buttonStyle,
  textStyle,
  disabled = false,
}) => {
  const canDecrease = quantity > minQuantity && !disabled;
  const canIncrease = quantity < maxQuantity && !disabled;

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Decrease Button */}
      <TouchableOpacity
        style={[
          styles.button,
          styles.decreaseButton,
          buttonStyle,
          !canDecrease && styles.buttonDisabled,
        ]}
        onPress={onDecrease}
        disabled={!canDecrease}
        activeOpacity={0.7}
      >
        <MinusIcon 
          size={16} 
          color={!canDecrease ? '#999' : '#333'} 
        />
      </TouchableOpacity>

      {/* Quantity Display */}
      <View style={[styles.quantityContainer, disabled && styles.quantityDisabled]}>
        <Text style={[styles.quantityText, textStyle, disabled && styles.quantityTextDisabled]}>
          {quantity}
        </Text>
      </View>

      {/* Increase Button */}
      <TouchableOpacity
        style={[
          styles.button,
          styles.increaseButton,
          buttonStyle,
          !canIncrease && styles.buttonDisabled,
        ]}
        onPress={onIncrease}
        disabled={!canIncrease}
        activeOpacity={0.7}
      >
        <PlusIcon 
          size={16} 
          color={!canIncrease ? '#999' : '#333'} 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#fff',
    height: 36,
    minWidth: 100,
  },
  button: {
    width: 36,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  decreaseButton: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
  },
  increaseButton: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  buttonDisabled: {
    backgroundColor: '#f0f0f0',
  },
  quantityContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  quantityDisabled: {
    backgroundColor: '#f8f9fa',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  quantityTextDisabled: {
    color: '#999',
  },
});

export default QuantitySelector; 