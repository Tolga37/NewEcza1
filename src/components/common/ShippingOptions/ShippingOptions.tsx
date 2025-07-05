import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ShippingOption {
  id: string;
  name: string;
  price: number;
  description?: string;
  estimatedDays?: string;
}

interface ShippingOptionsProps {
  options: ShippingOption[];
  selectedOptionId: string;
  onSelectOption: (optionId: string) => void;
  containerStyle?: any;
}

const ShippingOptions: React.FC<ShippingOptionsProps> = ({
  options,
  selectedOptionId,
  onSelectOption,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.title}>Kargo Seçenekleri</Text>
      {options.map((option) => {
        const isSelected = option.id === selectedOptionId;
        
        return (
          <TouchableOpacity
            key={option.id}
            style={[styles.optionContainer, isSelected && styles.optionSelected]}
            onPress={() => onSelectOption(option.id)}
            activeOpacity={0.7}
          >
            <View style={styles.optionHeader}>
              <View style={[styles.radioButton, isSelected && styles.radioButtonSelected]}>
                {isSelected && <View style={styles.radioButtonInner} />}
              </View>
              
              <View style={styles.optionInfo}>
                <Text style={[styles.optionName, isSelected && styles.optionNameSelected]}>
                  {option.name}
                </Text>
                {option.description && (
                  <Text style={styles.optionDescription}>
                    {option.description}
                  </Text>
                )}
                {option.estimatedDays && (
                  <Text style={styles.estimatedDays}>
                    {option.estimatedDays}
                  </Text>
                )}
              </View>
              
              <Text style={[styles.optionPrice, isSelected && styles.optionPriceSelected]}>
                {option.price === 0 ? 'Ücretsiz' : `${option.price.toFixed(2)} TL`}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    marginBottom: 12,
  },
  optionContainer: {
    borderWidth: 1,
    borderColor: '#e9ecef',
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#fff',
  },
  optionSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#f0f8ff',
  },
  optionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#007AFF',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#007AFF',
  },
  optionInfo: {
    flex: 1,
  },
  optionName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 2,
  },
  optionNameSelected: {
    color: '#007AFF',
  },
  optionDescription: {
    fontSize: 12,
    color: '#666',
    marginBottom: 2,
  },
  estimatedDays: {
    fontSize: 12,
    color: '#999',
  },
  optionPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  optionPriceSelected: {
    color: '#007AFF',
  },
});

export default ShippingOptions; 