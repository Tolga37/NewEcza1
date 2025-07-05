import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { SearchIcon, CloseIcon } from '../../icons';

interface SearchInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onSearch?: (text: string) => void;
  onClear?: () => void;
  showSearchIcon?: boolean;
  showClearIcon?: boolean;
  containerStyle?: any;
  inputStyle?: any;
  backgroundColor?: string;
  borderColor?: string;
  placeholderTextColor?: string;
  autoFocus?: boolean;
  editable?: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Ara...',
  value,
  onChangeText,
  onSearch,
  onClear,
  showSearchIcon = true,
  showClearIcon = true,
  containerStyle,
  inputStyle,
  backgroundColor = '#f8f9fa',
  borderColor = '#e9ecef',
  placeholderTextColor = '#6c757d',
  autoFocus = false,
  editable = true,
}) => {
  const [internalValue, setInternalValue] = useState(value || '');
  const [isFocused, setIsFocused] = useState(false);

  const handleChangeText = (text: string) => {
    setInternalValue(text);
    onChangeText?.(text);
  };

  const handleSearch = () => {
    onSearch?.(internalValue);
  };

  const handleClear = () => {
    setInternalValue('');
    onChangeText?.('');
    onClear?.();
  };

  const handleSubmitEditing = () => {
    onSearch?.(internalValue);
  };

  return (
    <View style={[
      styles.container,
      { backgroundColor, borderColor },
      isFocused && styles.focusedContainer,
      containerStyle
    ]}>
      {/* Sol taraf - Arama ikonu */}
      {showSearchIcon && (
        <TouchableOpacity onPress={handleSearch} style={styles.iconButton}>
          <SearchIcon size={16} color="#6c757d" />
        </TouchableOpacity>
      )}

      {/* Orta - TextInput */}
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        value={value !== undefined ? value : internalValue}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoFocus={autoFocus}
        editable={editable}
        returnKeyType="search"
        clearButtonMode="never" // iOS'ta otomatik clear butonunu kapatıyoruz
      />

      {/* Sağ taraf - Temizle ikonu */}
      {showClearIcon && (value !== undefined ? value : internalValue).length > 0 && (
        <TouchableOpacity onPress={handleClear} style={styles.iconButton}>
          <CloseIcon size={14} color="#6c757d" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    minHeight: 48,
  },
  focusedContainer: {
    borderColor: '#007AFF',
    shadowColor: '#007AFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    paddingHorizontal: 8,
    paddingVertical: 0,
  },
  iconButton: {
    padding: 4,
    minWidth: 32,
    minHeight: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SearchInput; 